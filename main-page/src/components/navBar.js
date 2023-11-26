import React from 'react';
import '../styles/Styles.css';

const NavigationBar = () => {
	return (
		<div className="navigationBar">
			<button className="navButton">Button 1</button>
			<button className="navButton">Button 2</button>
			<button className="navButton">Button 3</button>
			{/* Add more buttons as needed */}
		</div>
	);
};

export default NavigationBar;