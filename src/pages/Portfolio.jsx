import React from 'react';
import Navbar from '../components/Navbar';
import ProjectList from '../components/portfolio/ProjectList';

const Portfolio = () => {
	return (
		<div className='portfolio'>
			<Navbar />
			<ProjectList />
		</div>
	);
};

export default Portfolio;
