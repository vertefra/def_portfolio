import express from 'express'
import { getUserInfo } from '../controllers/userControllers.js'

const router = express.Router()

router.route('/').get(getUserInfo)

export default router
