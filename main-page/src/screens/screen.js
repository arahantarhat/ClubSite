import React from 'react';
import '../styles/Styles.css';
import NavigationBar from '../components/navBar';
import Blog from '../components/blog';

const Screen = () => {
	return (
		<div>
			<a className='navButton login-link'>Log-in / Registrarse</a>
			<div className='backgroundContainer'>
				<NavigationBar></NavigationBar>
				<Blog></Blog>
			</div>
		</div>
	);
};
  
  


export default Screen;