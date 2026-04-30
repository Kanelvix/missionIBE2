import express from 'express'
import { createReview, deleteReview, getReview, getReviews, updateReview } from '../models/reviewModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const reviews = await getReviews()
  res.json(reviews)
})

router.get('/:id', async (req, res) => {
  const review = await getReview(req.params.id)
  if (!review) return res.status(404).json({message: "Review not found"})
  res.json(review)
})

router.post('/', async (req, res) => {
  const { user_id, product_id, rating, review_text } = req.body

  const review = await createReview(user_id, product_id, rating, review_text)
  res.status(201).json(review)
})

router.patch('/:id', async (req, res) => {
  const { rating, review_text } = req.body
  const review = await updateReview(req.params.id, rating, review_text)
  res.json(review)
})

router.delete('/:id', async (req, res) => {
  const review = await deleteReview(req.params.id)
  if (!review) return res.status(404).json({message: "Review not found"})
  res.json(review)
})

export default router