import express from 'express'
import { createTutor, deleteTutor, getTutor, getTutors, updateTutor } from '../models/tutorModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const tutors = await getTutors()
  res.json(tutors)
})

router.get('/:id', async (req, res) => {
  const tutor = await getTutor(req.params.id)
  if (!tutor) return res.status(404).json({message: "Tutor not found"})
  res.json(tutor)
})

router.post('/', async (req, res) => {
  const { profession, company, user_id } = req.body

  const tutor = await createTutor(profession, company, user_id)
  res.status(201).json(tutor)
})

router.patch('/:id', async (req, res) => {
  const { profession, company } = req.body
  const tutor = await updateTutor(req.params.id, profession, company)
  res.json(tutor)
})

router.delete('/:id', async (req, res) => {
  const tutor = await deleteTutor(req.params.id)
  if (!tutor) return res.status(404).json({message: "Tutor not found"})
  res.json(tutor)
})

export default router