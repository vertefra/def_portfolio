import React from 'react';
import Header from '../modules/Header';
import Layout from '../modules/Layout';
import Footer from '../modules/Footer';
import Project from '../modules/Project';

// @route       GET - /user/projects
// @desc        Index page for all the projects
// @auth        public

const Index = ({ user, projects }) => {
	return (
		<Layout>
			<Header name={user.name} />
			<div className="content no-img">
				<div className="jumbo">
					<div className="hero fadeIn">
						{projects.length > 0 &&
							projects.map((p, idx) => {
								return <Project project={p} key={idx} />;
							})}
					</div>
				</div>
			</div>
			<Footer user={user} />
		</Layout>
	);
};

export default Index;
