import express from 'express';
import {
	getAdminIndex,
	getCreateProjectForm,
	postCreateNewProject,
} from '../controllers/adminControllers.js';

const router = express.Router();

router.route('/').get(getAdminIndex);
router.route('/projects/create').get(getCreateProjectForm);
router.route('/projects').post(postCreateNewProject);

export default router;
