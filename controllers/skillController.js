import Project from '../models/projectModel.js';
import { extractTagsFrequency } from '../utils.js';

export const getSkills = async (req, res) => {
	try {
		const projectTags = await Project.find({}).select('tags');

		const freq = extractTagsFrequency(projectTags);

		res.render('skills/Index', { skills: freq });
	} catch (error) {
		console.log(error);
	}
};
