import express from 'express';
import env from 'dotenv';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';

import connectDB from './config/database.js';
import expressReactViews from 'express-react-views';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

env.config();

connectDB();

const app = express();
app.use(express.static(__dirname + '/static'));

app.set('views', 'views');
app.set('view engine', 'jsx');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(bodyParser.json());

app.engine('jsx', expressReactViews.createEngine());

app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

app.listen(3001, () => {
	console.log('Server listening on 3001'.green);
});
