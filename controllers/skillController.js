import Project from '../models/projectModel.js';
import User from '../models/userModel.js';
import { extractTagsFrequency } from '../utils.js';

export const getSkills = async (req, res) => {
	try {
		const projectTags = await Project.find({}).select('tags');
		const user = await User.findOne({});
		const freq = extractTagsFrequency(projectTags);

		res.render('skills/Index', {
			skills: freq,
			projects: projectTags.length,
			user,
		});
	} catch (error) {
		console.log(error);
	}
};
