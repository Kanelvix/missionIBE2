import express from 'express'
import { createOrder, deleteOrder, getOrder, getOrders } from '../models/orderModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const orders = await getOrders()
  res.json(orders)
})

router.get('/:id', async (req, res) => {
  const order = await getOrder(req.params.id)
  if (!order) return res.status(404).json({message: "Order not found"})
  res.json(order)
})

router.post('/', async (req, res) => {
  const { user_id, product_id, invoice_number, total_price } = req.body

  const order = await createOrder(user_id, product_id, invoice_number, total_price)
  res.status(201).json(order)
})

router.delete('/:id', async (req, res) => {
  const order = await deleteOrder(req.params.id)
  if (!order) return res.status(404).json({message: "Order not found"})
  res.json(order)
})

export default router