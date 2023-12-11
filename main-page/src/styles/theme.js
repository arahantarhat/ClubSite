// MaterialTheme.js
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';


const theme = createTheme({
	palette: {
		background: {
			default: '#fafafa',
		},
		primary: {
			main: '#ff6600',
		},
		text: {
			primary: '#000000',
			secondary: '#828282',
		},
	},
	spacing: 8,
	shadows: ['0 2px 4px rgba(0, 0, 0, 0.1)'],
	typography: {
		fontFamily: 'Verdana, sans-serif',
		fontSize: 16,
		fontWeight: 'normal',
		h6: {
			fontSize: 18,
			fontWeight: 'bold',
			marginTop: 5,
			marginBottom: 1,
		},
	},
	shape: {
		borderRadius: 8,
	},
});

const MaterialTheme = ({ children }) => (
	<ThemeProvider theme={theme}>
		{children}
	</ThemeProvider>
);

MaterialTheme.propTypes = {
	children: PropTypes.node.isRequired,
};

export default MaterialTheme;
