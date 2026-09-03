import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { authRouter } from './routes/auth.routes.js'
import { errorMiddleware } from './middleware/error-middleware.js'
import { env } from './config/env.js'
import helmet from 'helmet'
import { MongoDB } from './utils/db.js'
import { productList } from "./routes/product.routes.js"

const app = express()
const PORT = env.PORT

const corsOption = {
    methods: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
    origin: env.UI_URL,
    credentials: true
}

app.use(cors(corsOption))
app.use(helmet())

await MongoDB()

app.use(express.json())
app.use(cookieParser())

app.use(authRouter)

app.use("/product", productList)

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})