import config from '../config.js';

const { loginLink } = config;

export const privateRoute = () => {
	return (req, res, next) => {
		console.log(req.headers);
		console.log('REQ.COOKIE', req.headers.cookie);

		if (req.headers.origin === config.allowedOrigins) {
			const cookie = JSON.parse(req.headers['set-cookie']);
			console.log('cookie => ', cookie);
			console.log('token => ', cookie.token);
			if (cookie.token) {
				// here logic to check toke is valid
			}
			const setCookie = {
				'Set-Cookie': JSON.stringify(cookie),
			};
			res.set(setCookie);
			console.log('RENDERING ADMIN INDEX');
			res.render('admin/Index');
		} else if (req.headers.cookie) {
			// check if toke is valid and process response
			const { token } = JSON.parse(req.headers.cookie);
			const cookie = {
				'Set-Cookie': JSON.stringify({ token }),
			};
			res.set(cookie);
			return next();
		} else {
			// redirect to login page

			res.redirect(loginLink + process.env.VERTE_AUTH_ID);
		}
	};
};
