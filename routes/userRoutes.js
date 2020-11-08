import express from 'express';
import {
	getUserIndex,
	updateUserInfo,
	notFound,
} from '../controllers/userControllers.js';

const router = express.Router();

router.route('/').get(getUserIndex);
router.route('/:ID').put(updateUserInfo);
router.route('*').get(notFound);

export default router;
