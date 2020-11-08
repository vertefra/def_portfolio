import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';

const Footer = ({ user }) => {
	console.log(user);
	return (
		<footer>
			<div className="mediaLink">
				<a href={user.github} target="_blank">
					<FaGithub size="2.5em"></FaGithub>
				</a>
			</div>
			<div className="mediaLink">
				<a href={user.linkedin} target="_blank">
					<FaLinkedin size="2.5em"></FaLinkedin>
				</a>
			</div>
			<div className="mediaLink cp">
				<FaCopyright size="1em" />
				<p>vertefra.com</p>
			</div>
			<div className="mediaLink">
				{' '}
				<a href={`mailto:${user.email}`} target="_blank">
					<FaMailBulk size="2.5em"></FaMailBulk>
				</a>
			</div>
			<div className="mediaLink">
				<a href={`tel:${user.phone}`} target="_blank">
					<FaPhone size="2.5em"></FaPhone>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
