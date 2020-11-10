import express from 'express';
import {
	getAdminIndex,
	getCreateProjectForm,
	getUpdateProjectForm,
	postCreateNewProject,
	putUpdateProject,
} from '../controllers/adminControllers.js';

const router = express.Router();

router.route('/').get(getAdminIndex);
router.route('/projects/create').get(getCreateProjectForm);
router.route('/projects').post(postCreateNewProject);
router.route('/projects/:ID').get(getUpdateProjectForm);
router.route('/projects/:ID').put(putUpdateProject);

export default router;
