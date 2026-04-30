import express from 'express'
import { createMaterial, deleteMaterial, getMaterial, getMaterials, updateMaterial } from '../models/materialModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const materials = await getMaterials()
  res.json(materials)
})

router.get('/:id', async (req, res) => {
  const material = await getMaterial(req.params.id)
  if (!material) return res.status(404).json({message: "Material not found"})
  res.json(material)
})

router.post('/', async (req, res) => {
  const { modul_id, title, duration, type, caption, file_url, material_video_url, sequence } = req.body

  const material = await createMaterial(modul_id, title, duration, type, caption, file_url, material_video_url, sequence)
  res.status(201).json(material)
})

router.patch('/:id', async (req, res) => {
  const { title, type, caption, file_url, material_video_url, sequence } = req.body
  const material = await updateMaterial(req.params.id, title, type, caption, file_url, material_video_url, sequence)
  res.json(material)
})

router.delete('/:id', async (req, res) => {
  const material = await deleteMaterial(req.params.id)
  if (!material) return res.status(404).json({message: "Material not found"})
  res.json(material)
})

export default router