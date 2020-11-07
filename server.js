import express from 'express'
import env from 'dotenv'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

import connectDB from './config/database.js'
import expressReactViews from 'express-react-views'
import userRoutes from './routes/userRoutes.js'
import adminRoutes from './routes/adminRoutes.js'

env.config()
const __dirname = dirname(fileURLToPath(import.meta.url))

connectDB()

const app = express()

app.set('views', 'views')
app.set('view engine', 'jsx')
app.use(express.static(__dirname + '/static'))

app.engine('jsx', expressReactViews.createEngine())

app.use('/index', userRoutes)
app.use('/admin', adminRoutes)

app.listen(3001, () => {
  console.log('Server listening on 3001'.green)
})
