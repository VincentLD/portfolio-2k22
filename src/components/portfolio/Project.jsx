import { React, useState } from 'react';

const Project = (props) => {
	const [showInfo, setShowInfo] = useState(false);
	const { name, languagesIcons, source, info, picture } = props.item;

	const handleInfo = () => {
		setShowInfo(!showInfo);
	};

	return (
		<div className='project'>
			<div className='icons'>
				{languagesIcons.map((icon) => (
					<i className={icon} key={icon}></i>
				))}
			</div>
			<div className='content'>
				<h3>{name}</h3>
				<img src={picture} alt='' onClick={handleInfo} />
			</div>

			{showInfo && (
				<div className='showInfos'>
					<div className='infosContent'>
						<div className='head'>
							<h2>{name}</h2>
							<div className='sourceCode'>
								<a
									href={source}
									rel='noopener noreferrer'
									className='button source'
									target='_blanc'
								>
									<i className='fas fa-code'></i>
									<span>Code source</span>
								</a>
							</div>
						</div>
						<p className='infos'>{info}</p>

						<div className='button return' onClick={handleInfo}>
							Retour
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Project;
