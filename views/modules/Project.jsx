import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { FaTags } from 'react-icons/fa';
import Tag from './Tag';

const Project = ({ project }) => {
	let tags;
	if (project.tags) {
		tags = project.tags.split(',');
	}

	const selectTagColor = (tag) => {
		switch (tag) {
			case 'JavaScript':
				return 'red';
			default:
				return 'yellow';
		}
	};

	console.log(tags.length);
	return (
		<div className="projectCard">
			<div className="projectImg">
				<img src={project.img}></img>
			</div>
			<div className="cardBody">
				<h1>
					<AiFillCaretRight size={'1em'} />
					{project.projectTitle}
				</h1>
				<section className="description">
					<AiFillCaretRight size={'1em'} />
					{project.description}
				</section>
				<section className="tags">
					<FaTags size="0.4em" />
					{tags.length > 0 &&
						tags.map((t, i) => {
							return (
								<Tag key={i} tag={t} color={selectTagColor(t)} />
							);
						})}
				</section>
				<section className="links">
					<a className="github" href={project.github}>
						Repo
					</a>
					<a className="live" href={project.live}>
						Live
					</a>
				</section>
			</div>
		</div>
	);
};

export default Project;
