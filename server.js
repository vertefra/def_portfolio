import express from 'express';
import env from 'dotenv';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import cors from 'cors';

import connectDB from './config/database.js';
import expressReactViews from 'express-react-views';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import config from './config.js';
import { privateRoute } from './middleware/auth.js';

const PORT = process.env.PORT || 3002;
const __dirname = dirname(fileURLToPath(import.meta.url));

env.config();

connectDB();

const app = express();

const allowedOrigins = config.allowedOrigins;

const corsOptions = {};

app.use(cors());
app.use(express.static(__dirname + '/static'));
app.set('views', 'views');
app.set('view engine', 'jsx');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(bodyParser.json());

app.engine('jsx', expressReactViews.createEngine());

app.get('/', (req, res) => {
	res.redirect('/user');
});

app.use('/user', userRoutes);
app.use('/skills', skillRoutes);
app.use('/admin', privateRoute(), adminRoutes);

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`.green);
});
