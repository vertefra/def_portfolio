import express from 'express'
import env from 'dotenv'
import connectDB from './config/database.js'
import userRoutes from './routes/userRoutes.js'
env.config()

connectDB()

const app = express()

app.use('/users', userRoutes)

app.listen(3001, () => {
  console.log('Server listening on 3000'.green)
})
