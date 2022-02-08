import React from 'react';

const ProgressBar = (props) => {
	const { languages, title, className } = props;

	return (
		<div className={className}>
			
			<h3>{title}</h3>

			<div>
				{languages.map((item) => {
					let xpYears = 2;
					let progressBar = (item.xp / xpYears) * 100 + '%';

					return (
						<div key={item.id} className='languagesList'>
							<li>
								<i style={{color: item.color}} className={item.icon}></i>
								<p>{item.value}</p>
							</li>
							<div className='progressBar' style={{ width: progressBar }}></div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProgressBar;
