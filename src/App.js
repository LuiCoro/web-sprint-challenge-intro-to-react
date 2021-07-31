import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	const [character, setCharacter] = useState([]);

	useEffect(() => {
		axios
			.get('https://swapi.dev/api/people/')
			.then(response => {
				setCharacter(response.data);
			})
			.catch(error => {
				console.log('ERROR ->', error);
			});
	}, []);

	console.log(character);

	return (
		<div className='App'>
			<h1 className='Header'>characters</h1>

			{character.map((cast, index) => {
				return <Character key={index} details={cast} />;
			})}
		</div>
	);
};

export default App;
