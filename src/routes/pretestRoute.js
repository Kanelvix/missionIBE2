import express from 'express'
import { createPretest, deletePretest, getPretest, getPretests, updatePretest } from '../models/pretestModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const pretests = await getPretests()
  res.json(pretests)
})

router.get('/:id', async (req, res) => {
  const pretest = await getPretest(req.params.id)
  if (!pretest) return res.status(404).json({message: "Pretest not found"})
  res.json(pretest)
})

router.post('/', async (req, res) => {
  const { material_id, question, answer_a, answer_b, answer_c, answer_d, correct_answer } = req.body

  const pretest = await createPretest(material_id, question, answer_a, answer_b, answer_c, answer_d, correct_answer)
  res.status(201).json(pretest)
})

router.patch('/:id', async (req, res) => {
  const { question, answer_a, answer_b, answer_c, answer_d, correct_answer } = req.body
  const pretest = await updatePretest(req.params.id, question, answer_a, answer_b, answer_c, answer_d, correct_answer)
  res.json(pretest)
})

router.delete('/:id', async (req, res) => {
  const pretest = await deletePretest(req.params.id)
  if (!pretest) return res.status(404).json({message: "Pretest not found"})
  res.json(pretest)
})

export default router