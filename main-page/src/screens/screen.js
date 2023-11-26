import React from 'react';
import '../styles/Styles.css';
import NavigationBar from '../components/navBar';
import Blog from '../components/blog';

const Screen = () => {

	return (
		<div className='backgroundContainer'>
			<NavigationBar></NavigationBar>
			<Blog></Blog>
		</div>
	);
};

export default Screen;