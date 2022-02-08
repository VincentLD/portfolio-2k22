import { React, useState } from 'react';
import Navbar from '../components/Navbar';
import { init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';

init('user_u2Ga109QASM8JeHx47TDu');

const Contact = () => {
	const [mail, setMail] = useState('');
	const [message, setMessage] = useState('');
	const [name, setName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		sendFeedback('template_68e2u11', {
			name,
			mail,
			message,
		});
	};

	const sendFeedback = (template_id, variables) => {
		window.emailjs.send('gmail', template_id, variables).then((res) => {
			console.log('succes');
			setMail('');
			setMessage('');
			setName('');
		})
		.catch((err) => document.querySelector('.form-message').innerHTML = "Une erreur s'est produite, veuillez réessayer.")
	};

	return (
		<div>
			<Navbar />
			<div className='contact'>
				<div className='head'>
					<h2>
						Merci de votre <span>visite !</span>
					</h2>
					<img src='./images/blob4.png' alt='' />
				</div>
				<div className='formHeaderWrapp'>
					<p className='formHeader'>N'hésitez pas à laisser un message ! 💬</p>
				</div>
				<div className='wrapper'>
					<div className="form-message"></div>
					<form action=''>
						<div className='formgroup'>
							<label htmlFor='name'>Nom</label>
							<input
								type='text'
								id='name'
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className='formgroup'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								id='email'
								onChange={(e) => setMail(e.target.value)}
							/>
						</div>
						<div className='formgroup'>
							<label htmlFor='message'>Message</label>
							<textarea
								rows='8'
								type='text'
								name='message'
								onChange={(e) => setMessage(e.target.value)}
							></textarea>
						</div>
						<button type='submit' onClick={handleSubmit}>
							Envoyer
						</button>
					</form>
					<div className='infos'>
						<p>
							07 67 17 05 73 <i className='fas fa-phone-alt'></i>
						</p>
						<p>
							vledoledec@gmail.com <i className='fas fa-envelope'></i>
						</p>
						<p>
							Rue André Gabaret <span>17000 La Rochelle</span>
							<i className='fas fa-map-marker-alt'></i>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
