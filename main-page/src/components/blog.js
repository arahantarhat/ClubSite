import React from 'react';
import PropTypes from 'prop-types';


const Blog = () => {
// just map out the box components
	const blogExamples = [{
		title: 'how to escape portugal',
		description: 'guide on escaping portugal',
		likes: 50,
		userLink: 'donaty.com',
		username: 're4l from portugal'
	}, {
		title: 'how to escape poland',
		description: 'guide on escaping poland',
		likes: 50,
		userLink: 'esoe.com',
		username: 'consiak'
	}
	];

	return (
		<div>
			{blogExamples.map((blog, index) => (
				<BlogBox
					key={index} // Add a unique key for each iteration
					title={blog.title}
					description={blog.description}
					likes={blog.likes}
					userLink={blog.userLink}
					username={blog.username}
				/>
			))}
		</div>
	);
};

const BlogBox = (props) => {
	const { title, description, likes, userLink, username } = props;

	return (
		<div className='blogBoxContainer'>
			<div className='boxContainer'>
				<div className='userLink'>
					<a href={userLink}>{username}</a>
				</div>
				<h2>{title}</h2>
				<p>{description}</p>
				<div className='likes'>Likes: {likes}</div>
			</div>
		</div>
	);
};

BlogBox.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	likes: PropTypes.number.isRequired,
	userLink: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
};


export default Blog;