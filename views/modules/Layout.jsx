import React from 'react';

const Layout = ({ children }) => {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link rel="stylesheet" href="/css/style.css" />
				<title>vertefra</title>
			</head>
			<body>
				<div className="wrapper">{children}</div>
			</body>
		</html>
	);
};

export default Layout;
