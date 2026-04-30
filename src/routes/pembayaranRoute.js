import express from 'express'
import { createPayment, getPayment, getPayments } from '../models/pembayaranModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const payments = await getPayments()
  res.json(payments)
})

router.get('/:id', async (req, res) => {
  const payment = await getPayment(req.params.id)
  if (!payment) return res.status(404).json({message: "Payment not found"})
  res.json(payment)
})

router.post('/', async (req, res) => {
  const { order_id, method, payment_status } = req.body

  const module = await createPayment(order_id, method, payment_status)
  res.status(201).json(module)
})


export default router