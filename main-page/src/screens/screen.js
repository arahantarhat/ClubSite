import React from 'react';
import { Container, Grid, AppBar, Toolbar, Button } from '@mui/material';
import MaterialTheme from '../styles/theme';
import NavigationBar from '../components/navBar';
import Blog from './blog';
import '../styles/Styles.css';

const CustomAppBar = () => {
	return (
		<AppBar position="static" style={{ width: '100%', backgroundColor: 'transparent', boxShadow: 'none' }}>
			<Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
				{/* Add more buttons or components as needed */}
				<Button color="inherit" style={{ textDecoration: 'underline' }}>
          Log-in / Registrarse
				</Button>
			</Toolbar>
		</AppBar>
	);
};

const Screen = () => {
	return (
		<MaterialTheme>
			<Container>
				<CustomAppBar />
				<Grid container justifyContent="flex-end" alignItems="flex-start" spacing={2}>
					<Grid item xs={12} className='backgroundContainer'>
						<NavigationBar />
						<Blog/>
						{/* Add more BlogBox components as needed */}
					</Grid>
				</Grid>
			</Container>
		</MaterialTheme>
	);
};

export default Screen;