import { Hono } from "hono";
import { PrismaClient } from '../generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@habibsheikh/medium-common";
import { tr } from "zod/v4/locales";
export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>()

blogRouter.use('/*', async(c, next) => {
    // Extract the user id
    // pass it down to the route handler

    const authHeader = c.req.header("Authorization") || ""
    try {
        const user = await verify(authHeader,c.env.JWT_SECRET)
        if(user){
            c.set("userId", String(user.id))
            return await next()
        } else{
            c.status(411)
            return c.json({
                message: "You are logged out!!"
            })
        }
    } catch (e){
        c.status(411)
        return c.json({
            message: "You are logged out!!"
        })
    }
})

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const authorId = c.get("userId")
    const body = await c.req.json()

    const { success } = createBlogInput.safeParse(body)
      if (!success) {
        c.status(411)
        return c.json({
            message: "Invalid Inputs"
        })
      }
    try {
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: Number(authorId)
            }
        })
        return c.json({
            id: post.id
        })
    } catch (e) {
        c.status(411)
        return c.json({
            message: "something is wrong here"
        })
    }
})

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const { success } = updateBlogInput.safeParse(body)
      if (!success) {
        c.status(411)
        return c.json({
            message: "Invalid Inputs"
        })
      }
    const post = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    })
    return c.json({
        id: post.id
    })
})

// pagination
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const post = await prisma.post.findMany({
            select:{
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return c.json({
            post
        })
    } catch (e) {
        c.status(411)
        return c.json({
            message: "Server Error"
        })
    }
})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = c.req.param("id")
    try {
        const post = await prisma.post.findFirst({
            where: {
                id: Number(id)
            },
            select:{
                id: true,
                content: true,
                title: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return c.json({
            post
        })
    } catch (e) {
        c.status(411)
        return c.json({
            message: "Error while fetching blog post"
        })
    }
})


