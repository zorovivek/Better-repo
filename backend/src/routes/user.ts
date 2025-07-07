import { Hono } from "hono";
import { PrismaClient } from '../generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'

import { signupInput, signinInput } from "@habibsheikh/medium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

userRouter.post('/signup', async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()
  const { success } = signupInput.safeParse(body)
  if (!success) {
    c.status(411)
    return c.json({
        message: "Invalid Inputs"
    })
  }
  // Zod, hashed password
  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password
      }
    })
    // return c.text('Hello Hono!')
    const token = await sign({id: user.id},c.env.JWT_SECRET)

    return c.json({jwt: token})
  } 
  catch (e) {
    console.log(e);
    c.status(411)
    return c.json({
      "message": "Something went wrong"
    })
  }
})

userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()
  const { success } = signinInput.safeParse(body)
  if (!success) {
    c.status(411)
    return c.json({
        message: "Invalid Inputs"
    })
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password
      }
    })

    if (!user) {
      c.status(401)
      return c.json({ message: "Invalid email or password" })
    }

    const token = await sign({id: user.id},c.env.JWT_SECRET)

    return c.json({jwt: token})
    
  } 
  catch (e) {
    console.log(e);
    c.status(411)
    return c.json({
      "message": "Something went wrong"
    })
  }
})
