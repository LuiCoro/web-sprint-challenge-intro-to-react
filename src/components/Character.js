// Write your Character component here
import React from 'react';
import styled from 'styled-components';

// Styling:
const Card = styled.div`
	border: 5px solid black;
	background-color: lightgray;
	margin: 32px;
	box-shadow: 8px 10px 8px black;
`;

const CharacterName = styled.h1`
	color: red;
	font-size: 1.5rem;
	text-shadow: 5px 5px 7px black;
`;

const Gender = styled.h2`
	color: blueviolet;
	font-size: 1.3rem;
	font-family: Georgia, 'Times New Roman', Times, serif;
`;

const BirthDay = styled.h3`
	color: green;
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
		'Lucida Sans', Arial, sans-serif;
`;

const Height = styled.div`
	color: salmon;
	font-family: 'Times New Roman', Times, serif;
	font-size: 2rem;
	text-shadow: 2px 5px 9px black;
`;

const Mass = styled.div`
	color: indigo;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 2rem;
`;

const Hair = styled.div`
	color: orange;
	font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	font-size: 2rem;
	text-shadow: 5px 5px 8px black;
`;

// Code:
const Character = props => {
	const { details } = props;

	return (
		<Card>
			<CharacterName>{details.name}</CharacterName>
			<Gender>
				Gender: {details.gender === 'n/a' ? 'No Gender' : details.gender}
			</Gender>
			<BirthDay>Birth Year: {details.birth_year}</BirthDay>
			<Hair>
				Hair Color: {details.gender === 'n/a' ? 'No Hair' : details.hair_color}
			</Hair>
			<Mass>Mass: {details.mass}</Mass>
			<Height>Height: {details.height}</Height>
		</Card>
	);
};

export default Character;
