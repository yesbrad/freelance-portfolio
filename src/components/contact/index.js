import React, { useRef, useState } from 'react';
import './styles.scss';
import { IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { TiPhone } from 'react-icons/ti';
import { useReveal } from '../../hooks';
import { useSpring, animated, config } from 'react-spring';
const sgMail = require('@sendgrid/mail');

const Contact = () => {	
	const ref = useRef();
	const vis = useReveal(ref);

	const [email, SetEmail] = useState('');
	const [subject, SetSubject] = useState('');
	const [message, SetMessage] = useState('');
	const [sending, SetSending] = useState(false);
	const [error, SetError] = useState([]);

	const spring = useSpring({
		opacity: vis ? 1 : 0,
		transform: vis ? 'scale(1) rotateX(0)' : 'scale(0.95) rotateX(50deg)',
		config: { ...config.slow}
	})

	const onSendEmail = async () => {
		sgMail.setApiKey(process.env.REACT_APP_SGKEY);

		if (sending)
			return;
		
		const err = [];
		
		if (!subject) {
			err.push('Missing Subject Line');
		}

		if (!email) {
			err.push('Missing Email');
		}

		if (!message) {
			err.push('Missing Message');
		}

		SetError(err);

		if (err.length > 0) {
			return;
		}

		SetSending(true);

		const msg = {
			to: 'b.bradfrancis@gmail.com',
			from: 'b.bradfrancis@gmail.com',
			subject: subject,
			text: `Freelane Portfolio Message: ${email}.\n${message}`,
		};

		await sgMail.send(msg);

		SetSending(false);
	}

	return (
		<div ref={ref} className="contact-container">
			<animated.div style={spring} className="contact-content">
				<div className="contact-col-image">
					<h1>Get In Touch.</h1>
				</div>
				<div className="contact-col" onSubmit={e => { e.preventDefault(); onSendEmail(); }}>
					<form>
						<h2>Subject</h2>
						<input type="text" onChange={e => SetSubject(e.target.value)} value={subject}/>
						<h2>Email</h2>
						<input type="email" onChange={e => SetEmail(e.target.value)} value={email} />
						<h2>Message</h2>
						<textarea name="" id="" cols="30" rows="8" onChange={e => SetMessage(e.target.value)} value={message} />
						<input type="submit" value={sending ? 'Sending' : 'Send'} />
						{error.length > 0 && <div className="contact-errors">
							{error.map(err => <span>{err}</span>)}
						</div>}
						<h3>Or</h3>
						<div className="contact-phone">
							<TiPhone className="contact-phone-icon"/>
							<h4>+61438783137</h4>
						</div>
						<h3>Or</h3>
						<div className="contact-socials">
							<button><IoLogoTwitter className="contact-icon"/></button>
							<button><IoLogoLinkedin className="contact-icon"/></button>
							<button><IoLogoInstagram className="contact-icon"/></button>
							<button><IoMdMail className="contact-icon"/></button>
						</div>
					</form>
				</div>
			</animated.div>
		</div>
	)
}

export default Contact;