// Write your Character component here
import React from 'react';

const Character = props => {
	const { details } = props;
	return (
		<div>
			<h1>{details.name}</h1>
		</div>
	);
};

export default Character;
