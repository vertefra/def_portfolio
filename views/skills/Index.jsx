import React from 'react';
import Footer from '../modules/Footer';
import Header from '../modules/Header';
import Layout from '../modules/Layout';
import Skill from '../modules/Skill';

const Index = ({ skills, projects, user }) => {
	const skillsArr = Object.keys(skills)
		.map((key) => {
			return { [key]: skills[key] };
		})
		.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);

	return (
		<Layout>
			<Header name={user.name} />
			<div className="content no-img">
				<div className="jumbo">
					<div className="hero fadeIn">
						<div className="skillsContainer">
							<h1 className="projectTitle skillTitle">
								How often I use in my projects:
							</h1>
							{skillsArr.map((obj, i) => {
								return (
									Object.values(obj)[0] > 0.1 && (
										<Skill
											key={i}
											skillName={Object.keys(obj)[0]}
											skillFreq={Object.values(obj)[0]}
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
