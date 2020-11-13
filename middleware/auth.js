import { loginLink } from '../config.js';

export const privateRoute = () => {
	return (req, res, next) => {
		const cookie = req.headers.cookie;

		if (cookie) {
			const { token } = JSON.parse(cookie);
			// check if toke is valid and process response
			const cookie = {
				'Set-Cookie': JSON.stringify({ token: 'hjdskajdkasjdkas' }),
			};
			res.set(cookie);
			return next();
		} else {
			// redirect to login page

			res.redirect(loginLink + process.env.VERTE_AUTH_ID);
		}
	};
};
