import React from 'react';

const Header = ({ name }) => {
	return (
		<div className="navbar">
			<div className="brand">
				<h1 className="brand">
					<span className="brand-h">V</span>
					{name}
				</h1>
			</div>
			<div>
				<ul className="nav">
					<li>
						<button className="primary-btn">projects</button>
					</li>
					<li>
						<button className="primary-btn">working on</button>
					</li>
					<li>
						<button className="primary-btn">
							Languages and stacks
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Header;
