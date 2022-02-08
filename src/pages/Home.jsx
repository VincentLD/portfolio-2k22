import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className='home'>
				<div className="header">
				<img src="./images/blob1.png" alt="" />

				<h1 className='home__title'>
					Vincent
					<span className='home__title--block'> Le Dolédec</span>
				</h1>
				</div>
				<h2 className='home__subtitle'>
					Étudiant en licence professionnelle
				</h2>
				<p className='home__studies'>
					Métiers de l'informatique Applications Web parcours développeur full stack 🤓
					<span className='home__studies--block'>La Rochelle Université</span>
				</p>
				<a href='./images/CV-VincentLD.pdf' className='home__download'>
					<span className='link'>Télécharge mon cv</span>
					<i className='fas fa-download'></i>
				</a>
				
			</div>

		</div>
	);
};

export default Home;
