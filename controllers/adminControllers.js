import Project from '../models/projectModel.js';
import User from '../models/userModel.js';

export const getAdminIndex = async (req, res) => {
	try {
		const user = await User.findOne({});
		res.render('admin/Index', { user });
	} catch (err) {
		console.log(err);
	}
};

export const getCreateProjectForm = async (req, res) => {
	res.render('admin/Create');
};

export const postCreateNewProject = async (req, res) => {
	try {
		const project = await Project.create(req.body);
		res.redirect('/user');
	} catch (err) {
		console.log(err);
	}
};
