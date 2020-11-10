import React from 'react';
import Footer from '../modules/Footer';
import Header from '../modules/Header';
import Layout from '../modules/Layout';
import Skill from '../modules/Skill';

const Index = ({ skills, projects, user }) => {
	return (
		<Layout>
			<Header name={user.name} />
			<div className="content no-img">
				<div className="jumbo">
					<div className="hero fadeIn">
						<div className="skillsContainer">
							<h1 className="projectTitle skillTitle">
								How often I use:
							</h1>
							{Object.keys(skills).map((key, i) => {
								return (
									skills[key] > 0.1 && (
										<Skill
											key={i}
											skillName={key}
											skillFreq={skills[key]}
										/>
									)
								);
							})}
						</div>
					</div>
				</div>
				<script src="/scripts/scripts.js"></script>
			</div>
			<Footer user={user} />
		</Layout>
	);
};

export default Index;
