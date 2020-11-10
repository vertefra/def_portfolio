import React from 'react';
import Layout from '../modules/Layout';

const Create = ({ project }) => {
	const defaultNewProject = {
		projectName: 'new project',
		description: 'description',
		img: 'img url',
		github: 'repo link',
		live: 'live link',
		tags: 'tag1, tag2',
	};

	// If project is define means that it's un update otherwise is  a new project

	const action = project
		? `/admin/projects/${project._id}?_method=PUT`
		: `/admin/projects`;

	const button = project ? 'update project' : 'create project';

	// If it's a new project set project as default project state

	project = project || defaultNewProject;

	return (
		<Layout>
			<div className="container">
				<div className="adminTitle">
					<h1>admin interface: projects</h1>
				</div>
				<form action={action} method="POST">
					<div className="dataField">
						<label htmlFor="brand">Project Name</label>
						<input
							type="text"
							defaultValue={project.projectName}
							name="projectName"
							id="brand"
						/>
					</div>

					<div className="dataField">
						<label htmlFor="description">Description</label>
						<textarea
							type="text"
							name="description"
							defaultValue={project.description}
						></textarea>
					</div>

					<div className="dataField">
						<label htmlFor="img">Img url</label>
						<input
							type="img"
							defaultValue={project.img}
							name="img"
							id="img"
						/>
					</div>

					<div className="dataField">
						<label htmlFor="live">live</label>
						<input
							type="text"
							defaultValue={project.live}
							name="live"
							id="live"
						/>
					</div>

					<div className="dataField">
						<label htmlFor="github">GitHub</label>
						<input
							type="text"
							defaultValue={project.github}
							name="github"
							id="github"
						/>
					</div>

					<div className="dataField">
						<label htmlFor="tags">Tags</label>
						<input
							type="text"
							defaultValue={project.tags}
							name="tags"
							id="github"
						/>
					</div>

					<button type="submit" className="primary-btn">
						{button}
					</button>
				</form>
			</div>
		</Layout>
	);
};
export default Create;
