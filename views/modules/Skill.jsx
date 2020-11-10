import React from 'react';

const Skill = ({ skillName, skillFreq }) => {
	return (
		<div className="skillBar">
			<div className="skillName">{skillName}</div>
			<div className="bar">{Math.round(skillFreq * 100)}</div>
		</div>
	);
};

export default Skill;
