import express from 'express'

import kategoriKelasRoute from './routes/kategoriKelasRoute.js'
import kelasSayaRoute from './routes/kelasSayaRoute.js'
import materialRoute from './routes/materialRoute.js'
import modulKelasRoute from './routes/modulKelasRoute.js'
import orderRoute from './routes/orderRoute.js'
import pembayaranRoute from './routes/pembayaranRoute.js'
import pretestRoute from './routes/pretestRoute.js'
import produkRoute from './routes/produkRoute.js'
import reviewRoute from './routes/reviewRoute.js'
import tutorRoute from './routes/tutorRoute.js'
import usersRoute from './routes/usersRoute.js'

const app = express()

app.use(express.json()) 

app.use('/category', kategoriKelasRoute)
app.use('/myclass', kelasSayaRoute)
app.use('/material', materialRoute)
app.use('/module', modulKelasRoute)
app.use('/order', orderRoute)
app.use('/payment', pembayaranRoute)
app.use('/pretest', pretestRoute)
app.use('/product', produkRoute)
app.use('/review', reviewRoute)
app.use('/tutor', tutorRoute)
app.use('/users', usersRoute)


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})