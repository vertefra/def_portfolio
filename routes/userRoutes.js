import express from 'express';
import {
	getUserIndex,
	updateUserInfo,
	getUserProjects,
	notFound,
} from '../controllers/userControllers.js';

const router = express.Router();

router.route('/').get(getUserIndex);
router.route('/:ID').put(updateUserInfo);
router.route('/projects').get(getUserProjects);
router.route('*').get(notFound);

export default router;
