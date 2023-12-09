import React from 'react';
import '../styles/Styles.css';

const NavigationBar = () => {
	return (
		<div className="navigationBar">
			<button className="navButton">Home</button>
			<button className="navButton">Foro</button>
			<button className="navButton">Codeforces</button>
			<button className="navButton">Tasks</button>
			{/* Add more buttons as needed */}
		</div>
	);
};

export default NavigationBar;