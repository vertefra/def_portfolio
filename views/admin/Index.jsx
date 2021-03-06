import React from 'react';
import Layout from '../modules/Layout.jsx';

// @route       GET - /user
// @desc        show the user info
// @auth        private - need jwt token

const Index = ({ user, projects }) => {
	const defaultUser = {
		name: 'new Name',
		description: 'description',
		email: 'test@email.com',
		phone: '',
		twitter: '',
		linkedin: '',
		github: '',
	};

	console.log('PROJECTS:', projects);

	user = user || defaultUser;
	projects = projects || [];

	return (
		<Layout>
			<div className="container">
				<div className="adminTitle">
					<h1>Admin interface</h1>
				</div>
				<div>
					<form
						action={`/user/${user._id}?_method=PUT`}
						method="POST"
					>
						<div className="dataField">
							<label htmlFor="brand">User Name</label>
							<input
								type="text"
								defaultValue={user.name}
								name="name"
								id="brand"
							/>
						</div>

						<div className="dataField">
							<label htmlFor="description">Descpription</label>
							<textarea
								type="text"
								name="description"
								defaultValue={user.description}
							></textarea>
						</div>

						<div className="dataField">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								defaultValue={user.email}
								name="email"
								id="email"
							/>
						</div>

						<div className="dataField">
							<label htmlFor="phone">Phone</label>
							<input
								type="text"
								defaultValue={user.phone}
								name="phone"
							/>
						</div>

						<div className="dataField">
							<label htmlFor="twitter">Twitter</label>
							<input
								type="text"
								defaultValue={user.twitter}
								name="twitter"
								id="twitter"
							/>
						</div>

						<div className="dataField">
							<label className="linkedin">Linkedin</label>
							<input
								type="text"
								defaultValue={user.linkedin}
								name="linkedin"
								id="linkedin"
							/>
						</div>

						<div className="dataField">
							<label htmlFor="github">GitHub</label>
							<input
								type="text"
								defaultValue={user.github}
								name="github"
								id="github"
							/>
						</div>

						<button type="submit" className="primary-btn">
							submit
						</button>
					</form>
					<form>
						<button className="primary-btn">
							<a href="/admin/projects/create">Create New Project</a>
						</button>
					</form>
					<div className="projectList">
						<h1>Projects:</h1>

						{projects.map((p) => {
							return (
								<a href={`/admin/projects/${p._id}`}>
									<button type="button" className="updateProject">
										{p.projectName}
									</button>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Index;
