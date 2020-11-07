import express from 'express'
import { getUserIndex } from '../controllers/userControllers.js'

const router = express.Router()

router.route('/').get(getUserIndex)

export default router
