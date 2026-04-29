import express from 'express'
// import { getProducts } from './models/produkModel'
// import { getTutor, getTutors } from './models/tutorModel.js'
import { getUser, getUsers } from './models/usersModel.js'
// import { getCategories, getCategory } from './models/kategoriKelasModel.js'
// import { createUser, getUser, getUsers } from './models/usersModel.js'

const app = express()

app.use(express.json()) 

app.get("/", async (req, res) => {
  const products = await getUsers()
  res.send(products)
})

app.get("/:id", async (req, res) => {
  const id = req.params.id
  const product = await getUser(id)
  res.send(product)
})

// app.post("/", async (req, res) => {
//   const { name, pwd, email, profile_picture, phone_number } = req.body
//   const user = await createUser(name, pwd, email, profile_picture, phone_number)
//   res.status(201).send(user)
// })


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})