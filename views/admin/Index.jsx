import React from 'react';
import Layout from '../modules/Layout.jsx';

// @route       GET - /user
// @desc        show the user info
// @auth        private - need jwt token

const Index = ({ user }) => {
	const defaultNewUser = {
		name: 'new Name',
		description: 'description',
		email: 'test@email.com',
		phone: '',
		twitter: '',
		linkedin: '',
		github: '',
	};

	user = user || defaultNewUser;

	return (
		<Layout>
			<Container>
				<Row>
					<h1>Admin interface</h1>
				</Row>
				<Row>
					<Form
						action={`/user/${user._id}?_method=PUT`}
						method="POST"
					>
						<Form.Group>
							<Form.Label>User Name</Form.Label>
							<Form.Control
								type="text"
								defaultValue={user.name}
								name="name"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Descpription</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								defaultValue={user.description}
								name="description"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								defaultValue={user.email}
								name="email"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Phone</Form.Label>
							<Form.Control
								type="text"
								defaultValue={user.phone}
								name="phone"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Twitter</Form.Label>
							<Form.Control
								type="text"
								defaultValue={user.twitter}
								name="twitter"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Linkedin</Form.Label>
							<Form.Control
								type="text"
								defaultValue={user.linkedin}
								name="linkedin"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>GitHub</Form.Label>
							<Form.Control
								type="text"
								defaultValue={user.github}
								name="github"
							/>
						</Form.Group>

						<Button type="submit">submit</Button>
					</Form>
				</Row>
			</Container>
		</Layout>
	);
};

export default Index;
