import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
	projectName: { type: String },
	description: { type: String },
	img: { type: String },
	github: { type: String },
	live: { type: String },
	tags: { type: String },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
