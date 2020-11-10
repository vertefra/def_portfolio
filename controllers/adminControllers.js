import Project from '../models/projectModel.js';
import User from '../models/userModel.js';

export const getAdminIndex = async (req, res) => {
	try {
		const user = await User.findOne({});
		const projects = await Project.find({});
		res.render('admin/Index', { user, projects });
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

export const getUpdateProjectForm = async (req, res) => {
	try {
		const project = await Project.findById(req.params.ID);
		res.render('admin/Create', { project });
	} catch (error) {
		res.send({ error });
	}
};

export const putUpdateProject = async (req, res) => {
	try {
		const project = await Project.findOneAndUpdate(
			{ _id: req.params.ID },
			{
				...req.body,
			},
			{
				returnOriginal: false,
			},
		);

		const user = await User.findOne({});
		res.render('user/Index', { user });
	} catch (error) {
		res.json({ error });
	}
};
