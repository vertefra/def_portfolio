import React from 'react';
import Header from '../modules/Header';
import Layout from '../modules/Layout';

// @route       GET - /user
// @desc        show the user info
// @auth        public

const Index = ({ user }) => {
	console.log('user: ', user);
	return (
		<Layout>
			<Header />
			<h1>body</h1>
		</Layout>
	);
};

export default Index;
