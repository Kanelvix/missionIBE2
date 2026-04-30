import express from 'express'
import { createMyClass, deleteMyClass, getMyClass, getMyClasses } from '../models/kelasSayaModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const myClasses = await getMyClasses()
  res.json(myClasses)
})

router.get('/:id', async (req, res) => {
  const myClass = await getMyClass(req.params.id)
  if (!myClass) return res.status(404).json({message: "User's class not found"})
  res.json(myClass)
})

router.post('/', async (req, res) => {
  const { product_id, user_id } = req.body

  const myClass = await createMyClass(product_id, user_id)
  res.status(201).json(myClass)
})

router.delete('/:id', async (req, res) => {
  const myClass = await deleteMyClass(req.params.id)
  if (!myClass) return res.status(404).json({message: "User's class not found"})
  res.json(myClass)
})

export default router