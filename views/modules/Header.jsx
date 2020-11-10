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
						<a href="/user/projects">
							<button className="primary-btn">myProjects</button>
						</a>
					</li>
					<li>
						<a href="/user/working">
							<button className="primary-btn">workingOn</button>
						</a>
					</li>
					<li>
						<a href="/skills">
							<button className="primary-btn">techSkills</button>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Header;
