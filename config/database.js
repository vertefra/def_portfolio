import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});
		mongoose.set('useFindAndModify', false);

		console.log(
			`Mongo connected ${conn.connection.host}`.cyan.underline,
		);
	} catch (err) {
		console.log(`Error ${err}`.red.underline);
	}
};

export default connectDB;
