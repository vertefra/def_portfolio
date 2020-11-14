const setup = () => {
	console.log(process.env.NODE_ENV);
	if (process.env.NODE_ENV === 'development') {
		return {
			loginLink: 'http://127.0.0.1:5000/login?user_id=',
			allowedOrigins: 'http://127.0.0.1:5000',
		};
	}

	if (process.env.NODE_ENV === 'production') {
		return {
			loginLink:
				'https://verte-auth-render.herokuapp.com/login?user_id=',
		};
	}
};

const config = setup();

export default config;
