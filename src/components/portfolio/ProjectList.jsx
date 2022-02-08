import { React, useState } from 'react';
import { portfolioData } from '../../data/data';
import Project from './Project';

const ProjectList = () => {
	const [radio, setRadio] = useState('Voir tout');
	const radios = [
		{ id: 0, value: 'Voir tout', icon: 'fas fa-layer-group', color: '#fff' },
		{ id: 1, value: 'React', icon: 'fab fa-react', color: '#61DBFB' },
		{ id: 2, value: 'PHP', icon: 'fab fa-php', color: '#777BB3' },
		{ id: 3, value: 'WordPress', icon: 'fab fa-wordpress', color: '#fff' },
		{ id: 4, value: 'Laravel', icon: 'fab fa-laravel', color: '#E53A2D' },
		{ id: 5, value: 'CSS', icon: 'fab fa-css3-alt', color: '#30A0D1' },
	];

	const handleRadio = (evt) => {
		setRadio(evt.target.value);
	};

	return (
		<div className='portfolioContent'>
			<ul className='radioDisplay'>
				{radios.map((item) => {
					return (
						<li key={item.id} className='radio'>
							<input
								type='radio'
								name='radio'
								checked={item.value === radio}
								value={item.value}
								id={item.value}
								onChange={handleRadio}
							/>
							<label className='radio-label' htmlFor={item.value}>{item.value}</label>
							<i className={item.icon} style={{ color: item.color }}></i>
						</li>
					);
				})}
			</ul>

			<div className='projects'>
				{portfolioData
					.filter((item) => item.languages.includes(radio))
					.map((item) => {
						return <Project key={item.id} item={item} />;
					})}
			</div>
		</div>
	);
};

export default ProjectList;
