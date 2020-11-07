import React, { Children } from 'react';
import Header from './Header';

const Layout = ({ children }) => {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link rel="stylesheet" href="/css/bootstrap.min.css" />
				<link rel="stylesheet" href="/css/style.css" />

				<title>Document</title>
			</head>
			<body>{children}</body>
		</html>
	);
};

export default Layout;
