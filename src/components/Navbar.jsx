import {React, useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

	const [showLinks, setShowLinks] = useState(false);

	const handleShowLinks = () => {
		setShowLinks(!showLinks);
	}

	return (
		<nav className={`navbar ${showLinks ? "show-nav" : "hide-nav" }`}>
			<div className='navbar__logo'>
				<svg viewBox='0 0 96 58'>
					<path d='M12.8182 16.9451L25.266 29.4328C26.2742 30.4442 27.9862 30.1761 28.6282 28.9083L43.0068 0.569227C43.1899 0.218753 43.5537 0 43.9531 0L55.0622 0.0470435C55.6448 0.0493957 56.1156 0.517479 56.1156 1.09376V26.796C56.1156 27.3982 56.6126 27.8827 57.2213 27.8733L63.0612 27.7933C63.6485 27.7863 64.124 27.3158 64.1359 26.7349L64.4141 10.7283C64.4308 9.81093 65.5222 9.33109 66.2213 9.9356L95.6276 35.3791C96.1245 35.8096 96.1245 36.5764 95.6252 37.0045L71.1695 58L71.0482 47.5493C71.0435 47.2364 71.179 46.9377 71.4144 46.7307L82.7494 36.8069C83.2487 36.3694 83.2368 35.5955 82.7256 35.1721L72.7293 26.9324C72.0207 26.3467 70.9436 26.8478 70.9436 27.7604V34.904C70.9436 35.4967 70.4585 35.9789 69.8593 35.9813L48.6469 36.0824C48.0453 36.0848 47.5555 35.6049 47.5531 35.0098L47.4675 15.1621C47.4628 14.0096 45.8768 13.6685 45.3893 14.7152L31.0845 45.4347C30.7682 46.1121 29.8718 46.2744 29.3344 45.7546L0.320424 17.679C-0.35725 17.0227 0.111177 15.8819 1.05992 15.8819L10.9159 16.1077C11.6388 16.1242 12.3236 16.4253 12.8182 16.9451Z' />
				</svg>
			</div>
			<ul className="navbar__links">
				<li className='navbar__item'>
					<Link 
						to='/' 
						className='navbar__link'>
						Accueil
					</Link>
				</li>
				<li className='navbar__item'>
					<Link
						to='/competences'
						className='navbar__link'
					>
						Compétences
					</Link>
				</li>
				<li className='navbar__item'>
					<Link to='/portfolio' className='navbar__link'>
						Portfolio
					</Link>
				</li>
				<li className='navbar__item'>
					{' '}
					<Link to='/contact' className='navbar__link'>
						Contact
					</Link>
				</li>
			</ul>
			<button className="navbar__burger" onClick={handleShowLinks}>
				<span className="burger-bar"></span>
			</button>
		</nav>
	);
};

export default Navbar;
