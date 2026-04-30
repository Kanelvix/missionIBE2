import express from 'express'
import { createProduct, deleteProduct, getProduct, getProducts, softDeleteProduct, updateProduct } from '../models/produkModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const products = await getProducts()
  res.json(products)
})

router.get('/:id', async (req, res) => {
  const product = await getProduct(req.params.id)
  if (!product) return res.status(404).json({message: "Product not found"})
  res.json(product)
})

router.post('/', async (req, res) => {
  const { title, price, description, thumbnail_url, tutor_id, category_id, duration, lang } = req.body

  const product = await createProduct(title, price, description, thumbnail_url, tutor_id, category_id, duration, lang)
  res.status(201).json(product)
})

router.patch('/:id', async (req, res) => {
  const { title, price, description, thumbnail_url, category_id, duration, lang } = req.body
  const product = await updateProduct(req.params.id, title, price, description, thumbnail_url, category_id, duration, lang)
  res.json(product)
})

router.patch('/:id/delete', async (req, res) => {
  const product = await softDeleteProduct(req.params.id)
  if (!product) return res.status(404).json({message: "Product not found"})
  res.json(product)
})

router.delete('/:id', async (req, res) => {
  const product = await deleteProduct(req.params.id)
  if (!product) return res.status(404).json({message: "Product not found"})
  res.json(product)
})


export default router