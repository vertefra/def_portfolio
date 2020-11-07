import React from 'react';
import {
	Container,
	Jumbotron,
	Col,
	Fade,
	Row,
} from 'react-bootstrap';
import Header from '../modules/Header';
import Layout from '../modules/Layout';

// @route       GET - /user
// @desc        show the user info
// @auth        public

const Index = ({ user }) => {
	console.log('user: ', user);
	return (
		<Layout>
			<Container fluid>
				<Header name={user.name} />
				<Row>
					<Col lg={4}>
						<Jumbotron
							as="div"
							className="py-5 px-3 my-2 appear"
							fluid
						>
							<p style={{ fontSize: '2em' }} className="text-left">
								{user.description}
							</p>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default Index;
