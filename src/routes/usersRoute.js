import express from 'express'
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../models/usersModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const users = await getUsers()
  res.json(users)
})

router.get('/:id', async (req, res) => {
  const user = await getUser(req.params.id)
  if (!user) return res.status(404).json({message: "User not found"})
  res.json(user)
})

router.post('/', async (req, res) => {
  const { name, pwd, email, profile_picture, phone_number } = req.body

  const user = await createUser(name, pwd, email, profile_picture, phone_number)
  res.status(201).json(user)
})

router.patch('/:id', async (req, res) => {
  const { name, pwd, email, profile_picture, phone_number } = req.body
  const user = await updateUser(req.params.id, name, pwd, email, profile_picture, phone_number)
  res.json(user)
})

router.delete('/:id', async (req, res) => {
  const user = await deleteUser(req.params.id)
  if (!user) return res.status(404).json({message: "User not found"})
  res.json(user)
})

export default router