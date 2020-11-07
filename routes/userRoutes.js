import express from 'express';
import {
	getUserIndex,
	updateUserInfo,
} from '../controllers/userControllers.js';

const router = express.Router();

router.route('/').get(getUserIndex);
router.route('/:ID').put(updateUserInfo);

export default router;
