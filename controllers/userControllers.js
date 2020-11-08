import User from '../models/userModel.js';

export const getUserIndex = async (req, res) => {
	try {
		const user = await User.findOne({});
		res.render('user/Index', { user });
	} catch (err) {
		res.json({ error: err });
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
	} catch (err) {
		res.json({ error: err });
	}
};

export const notFound = async (req, res) => {
	try {
		const user = await User.findOne({});
		res.render('modules/WorkInProgress', { user });
	} catch (err) {
		res.json({ error: err });
	}
};
