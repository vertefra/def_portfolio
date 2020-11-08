import React from 'react';

const Header = ({ name }) => {
	return (
		<div className="navbar">
			<div className="brand">
				<h1 className="brand">
					<span className="brand-h">V</span>
					<a href="/user">{name}</a>
				</h1>
			</div>
			<div>
				<ul className="nav">
					<li>
						<button className="primary-btn">
							<a href="/user/projects">myProjects</a>
						</button>
					</li>
					<li>
						<button className="primary-btn">
							<a href="/user/working">workingOn</a>
						</button>
					</li>
					<li>
						<button className="primary-btn">
							<a href="/user/techs">techsAndSkils</a>
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Header;
