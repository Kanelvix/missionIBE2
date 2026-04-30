import express from 'express'
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from '../models/kategoriKelasModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const categories = await getCategories()
  res.json(categories)
})

router.get('/:id', async (req, res) => {
  const category = await getCategory(req.params.id)
  if (!category) return res.status(404).json({message: "Category not found"})
  res.json(category)
})

router.post('/', async (req, res) => {
  const { category_name } = req.body

  const category = await createCategory(category_name)
  res.status(201).json(category)
})

router.patch('/:id', async (req, res) => {
  const { category_name } = req.body
  const category = await updateCategory(req.params.id, category_name)
  res.json(category)
})

router.delete('/:id', async (req, res) => {
  const category = await deleteCategory(req.params.id)
  if (!category) return res.status(404).json({message: "Category not found"})
  res.json(category)
})

export default router