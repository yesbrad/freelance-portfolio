import React, { useRef } from 'react';
import './styles.scss';
import { IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { useReveal } from '../../hooks';
import { useSpring, animated, config } from 'react-spring';

const Contact = () => {	
	const ref = useRef();
	const vis = useReveal(ref);

	const spring = useSpring({
		opacity: vis ? 1 : 0,
		transform: vis ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(300px)',
	})

	return (
		<div ref={ref} className="contact-container">
			<animated.div style={spring} className="contact-content">
				<div className="contact-col-image">
					<h1>Get In Touch.</h1>
				</div>
				<div className="contact-col">
					<div>
						<h2>Subject</h2>
						<input type="text" />
						<h2>Email</h2>
						<input type="email" name="" id="" />
						<h2>Message</h2>
						<textarea name="" id="" cols="30" rows="10">

						</textarea>
						<input type="submit" value="Send"/>
						<h3>Or</h3>
						<div className="contact-socials">
							<button><IoLogoTwitter className="contact-icon"/></button>
							<button><IoLogoLinkedin className="contact-icon"/></button>
							<button><IoLogoInstagram className="contact-icon"/></button>
							<button><IoMdMail className="contact-icon"/></button>
						</div>
					</div>
				</div>
			</animated.div>
		</div>
	)
}

export default Contact;