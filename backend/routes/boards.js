import express from 'express'
import Board from '../models/board.js'
import Task from '../models/task.js'
const router = express.Router()


router.get('/', async (req, res) => {
const list = await Board.find().sort({ createdAt: -1 })
res.json(list)
})


router.post('/', async (req, res) => {
const b = await Board.create({ name: req.body.name })
res.status(201).json(b)
})


router.get('/:id/tasks', async (req, res) => {
const tasks = await Task.find({ boardId: req.params.id }).sort({ createdAt: -1 })
res.json(tasks)
})


export default router