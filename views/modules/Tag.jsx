import React from 'react';

const Tag = ({ tag, color }) => {
	const tagStyle = {
		backgroundColor: color,
		color: '#570b48',
	};

	return (
		<div className="tag" style={tagStyle}>
			{tag}
		</div>
	);
};

export default Tag;
