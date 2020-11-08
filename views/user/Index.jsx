import React from 'react';
import Footer from '../modules/Footer.jsx';
import Header from '../modules/Header.jsx';
import Layout from '../modules/Layout.jsx';

// @route       GET - /user
// @desc        show the user info
// @auth        public

const Index = ({ user }) => {
	return (
		<Layout>
			<Header name={user.name} />
			<div className="content">
				<div className="jumbo">
					<div className="hero">
						<h1 style={{ fontSize: '2em' }} className="text-left">
							CODE IT
							<p className="tagline">
								if you can imagine it, you can code it
							</p>
						</h1>
					</div>
				</div>
			</div>
			<Footer user={user} />
		</Layout>
	);
};

export default Index;
