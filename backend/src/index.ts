import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'

// const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()
app.use("/*", cors())

app.get('/', (c) => {
  return c.text("Welcome to Medium-blog")
})
app.route("/api/v1/user", userRouter)
app.route("/api/v1/blog", blogRouter)


export default app
