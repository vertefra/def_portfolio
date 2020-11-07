import express from 'express'
import { getAdminIndex } from '../controllers/adminControllers.js'

const router = express.Router()

router.get('/', getAdminIndex)

export default router
