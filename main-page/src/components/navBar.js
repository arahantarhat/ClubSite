// NavigationBar.js
import React from 'react';
import { Button } from '@mui/material';

const underlineStyle = {
	textDecoration: 'underline',
	color: 'black',
};

const NavigationBar = () => {
	return (
		<div className="navigationBar">
			<Button style={underlineStyle} className="navButton">
        Home
			</Button>
			<Button style={underlineStyle} className="navButton">
        Blog
			</Button>
			<Button style={underlineStyle} className="navButton">
        Codeforces
			</Button>
			<Button style={underlineStyle} className="navButton">
        Tasks
			</Button>
			{/* Add more buttons as needed */}
		</div>
	);
};

export default NavigationBar;

