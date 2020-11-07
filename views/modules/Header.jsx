import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
			<header>
					<Navbar expand="lg" bg="dark">
							<Navbar.Brand variant="ligth">
								<h1>VerteFra</h1>
							</Navbar.Brand>
							<Nav>
								<Nav.Link><h5>projects</h5></Nav.Link>
								<Nav.Link><h5>working on</h5></Nav.Link>
								<Nav.Link><h5>Languages and stacks</h5></Nav.Link>
							</Nav>
					</Navbar>
			</header>
    )
}
export default Header
