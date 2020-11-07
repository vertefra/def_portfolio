import React from 'react';
import { Button, ListGroup, Nav, Navbar } from 'react-bootstrap';

const Header = ({ name }) => {
	return (
		<Navbar
			as="header"
			expand="lg"
			bg="dark"
			className="justify-content-between"
			variant="dark"
			fluid={true}
		>
			<Navbar.Brand>
				<h1>{name}</h1>
			</Navbar.Brand>
			<Nav>
				<ListGroup as="ul" horizontal>
					<ListGroup.Item
						variant="primary"
						className="px-2 py-1 text-center"
						action
					>
						projects
					</ListGroup.Item>
					<ListGroup.Item variant="primary" className="mx-1" action>
						working on
					</ListGroup.Item>
					<ListGroup.Item variant="primary" className="mx-1" action>
						Languages and stacks
					</ListGroup.Item>
				</ListGroup>
			</Nav>
		</Navbar>
	);
};
export default Header;
