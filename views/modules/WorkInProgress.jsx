import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Layout from './Layout';

const WorkInProgress = ({ user }) => {
	return (
		<Layout>
			<Header name={user.name} />
			<div className="content">
				<div className="jumbo">
					<div className="hero fadeIn">
						<h1 style={{ fontSize: '2em' }}>404 Not found!</h1>
						<p className="tagline" style={{ fontSize: '.8em' }}>
							Sorry, this section is not available or under
							construction!
						</p>
					</div>
				</div>
			</div>
			<Footer user={user} />
		</Layout>
	);
};

export default WorkInProgress;
