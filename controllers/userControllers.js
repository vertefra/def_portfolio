import Project from '../models/projectModel.js';
import User from '../models/userModel.js';

export const getUserIndex = async (req, res) => {
	try {
		const user = await User.findOne({});
		res.render('user/Index', { user });
	} catch (error) {
		res.json({ error });
	}
};

export const updateUserInfo = async (req, res) => {
	try {
		const user = await User.findOneAndUpdate(
			{ _id: req.params.ID },
			{
				...req.body,
			},
			{
				returnOriginal: false,
			},
		);
		res.render('user/Index', { user });
	} catch (error) {
		res.json({ error });
	}
};

export const getUserProjects = async (req, res) => {
	try {
		const projects = await Project.find({});
		const user = await User.findOne({});
		res.render('projects/Index', { user, projects });
	} catch (error) {
		res.json({ error });
	}
};

export const notFound = async (req, res) => {
	try {
		const user = await User.findOne({});
		res.render('modules/WorkInProgress', { user });
	} catch (error) {
		res.json({ error });
	}
};
