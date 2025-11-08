import express from 'express'
import Task from '../models/task.js'
const router = express.Router()


router.post('/boards/:id/tasks', async (req, res) => {
const payload = { ...req.body, boardId: req.params.id }
const t = await Task.create(payload)
res.status(201).json(t)
})


router.put('/:id', async (req, res) => {
const t = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
res.json(t)
})


router.delete('/:id', async (req, res) => {
await Task.findByIdAndDelete(req.params.id)
res.status(204).end()
})


export default router