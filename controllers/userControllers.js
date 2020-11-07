import User from '../models/userModel.js';

export const getUserIndex = async (req, res) => {
	try {
		const user = await User.findOne({});
		console.log('User from mongo=> ', user);
		res.render('user/Index', { user });
	} catch (err) {
		res.send(err);
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
	} catch (err) {}
};
