import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	name: { type: String },
	description: { type: String },
	email: { type: String },
	phone: { type: String },
	twitter: { type: String },
	linkedin: { type: String },
	github: { type: String },
});

const User = mongoose.model('User', userSchema);

export default User;
