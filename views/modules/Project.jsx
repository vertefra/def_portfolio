import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { FaTags } from 'react-icons/fa';
import Tag from './Tag';

const Project = ({ project }) => {
	let tags;
	if (project.tags) {
		tags = project.tags.split(',');
	}

	// const selectTagColor = (tag) => {
	// 	switch (tag) {
	// 		case 'JavaScript':
	// 			return 'red';
	// 		default:
	// 			return 'yellow';
	// 	}
	// };

	const tagStyle = {
		fontSize: '1em',
	};

	return (
		<div className="projectCard">
			<div className="projectImg">
				<img src={project.img}></img>

				<section className="links">
					<a className="github" href={project.github}>
						Repo
					</a>
					<a className="live" href={project.live}>
						Live
					</a>
				</section>
			</div>

			<div className="cardBody">
				<section className="projectTitle">
					<AiFillCaretRight style={tagStyle} />
					{project.projectName}
				</section>

				<section className="description">
					<p>{project.description}</p>
				</section>

				<section className="tags">
					<FaTags size="0.4em" />
					{tags.length > 0 &&
						tags.map((t, i) => {
							return <Tag key={i} tag={t} />;
						})}
				</section>
			</div>
		</div>
	);
};

export default Project;
