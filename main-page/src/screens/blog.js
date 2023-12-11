import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Link } from '@mui/material';

const Blog = () => {
	// just map out the box components
	const blogExamples = [
		{
			title: 'how to escape portugal',
			likes: 50,
			userLink: 'donaty.com',
			username: 're4l from portugal',
		},
		{
			title: 'how to escape poland',
			likes: 50,
			userLink: 'esoe.com',
			username: 'consiak',
		},
	];

	return (
		<div>
			{blogExamples.map((blog, index) => (
				<BlogBox
					key={index}
					title={blog.title}
					likes={blog.likes}
					userLink={blog.userLink}
					username={blog.username}
				/>
			))}
		</div>
	);
};

const BlogBox = (props) => {
	const { title, likes, userLink, username } = props;
  
	return (
		<Card className='blogBoxContainer'>
			<CardContent className='boxContainer'>
				<Typography variant='subtitle2' component='div' className='userLink'>
					<Link href={userLink}>{username}</Link>
				</Typography>
				<Typography variant='h6' className='title'>
					{title}
				</Typography>
				<Typography variant='body2' color='textSecondary' className='likes'>
		Likes: {likes}
				</Typography>
			</CardContent>
		</Card>
	);
};

BlogBox.propTypes = {
	title: PropTypes.string.isRequired,
	likes: PropTypes.number.isRequired,
	userLink: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
};

export default Blog;
