import express from 'express'
import { createClassModule, deleteClassModule, getClassModule, getClassModules, updateClassModule } from '../models/modulKelasModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const modules = await getClassModules()
  res.json(modules)
})

router.get('/:id', async (req, res) => {
  const module = await getClassModule(req.params.id)
  if (!module) return res.status(404).json({message: "Module not found"})
  res.json(module)
})

router.post('/', async (req, res) => {
  const { title, product_id, sequence } = req.body

  const module = await createClassModule(title, product_id, sequence)
  res.status(201).json(module)
})

router.patch('/:id', async (req, res) => {
  const { title, sequence } = req.body
  const module = await updateClassModule(req.params.id, title, sequence)
  res.json(module)
})

router.delete('/:id', async (req, res) => {
  const module = await deleteClassModule(req.params.id)
  if (!module) return res.status(404).json({message: "Module not found"})
  res.json(module)
})

export default router