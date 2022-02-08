import React from 'react';
import Navbar from '../components/Navbar';
import ProgressBar from '../components/knowledges/ProgressBar';

const knowledges = {
	languages: [
		{ id: 1, value: 'PHP', xp: 1.9, icon: 'fab fa-php', color: '#777BB3' },
		{ id: 2, value: 'JavaScript', xp: 1.2, icon: 'fab fa-js-square', color:'#EFD81D' },
		{ id: 3, value: 'CSS', xp: 2, icon: 'fab fa-css3-alt', color: '#30A0D1' },
	],
	frameworks: [
		{ id: 1, value: 'Symfony', xp: 0.6, icon: 'fab fa-symfony' },
		{ id: 2, value: 'Laravel', xp: 1.1, icon: 'fab fa-laravel', color: '#E53A2D' },
		{ id: 3, value: 'Angular', xp: 0.3, icon: 'fab fa-angular', color: '#D6002F' },
		{ id: 4, value: 'React', xp: 0.6, icon: 'fab fa-react', color: '#61DBFB' },
	],
};
const { languages, frameworks } = knowledges;

const Knowledges = () => {
	return (
		<div>
			<Navbar />
			<div className='knowledges'>
				<div className='years'>
					<span>Expérience</span>
					<span className='oneYear'>1 an</span>
					<span className='twoYear'>2 ans</span>
				</div>
				<div className="progress-bars">
					<ProgressBar
						languages={languages}
						className='languagesDisplay'
						title='Langages'
					/>
					<ProgressBar
						languages={frameworks}
						className='languagesDisplay'
						title='Framework & Librairie'
					/>
				</div>
			</div>
		</div>
	);
};

export default Knowledges;
