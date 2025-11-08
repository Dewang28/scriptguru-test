import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import boardsRouter from './routes/boards.js'
import tasksRouter from './routes/tasks.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/boards', boardsRouter)
app.use('/tasks', tasksRouter)


const start = async () => {
await mongoose.connect(process.env.MONGO_URI )
app.listen(process.env.PORT || 5000)
console.log(`Server running on port ${process.env.PORT || 5000}` )
}
start()