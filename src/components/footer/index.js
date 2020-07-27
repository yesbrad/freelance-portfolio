import React, { useRef } from 'react';
import './styles.scss';
import { animated, useSpring, config } from 'react-spring';
import { useReveal } from '../../hooks';
import { IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoMdMail } from 'react-icons/io';

const Footer = () => {
	const ref = useRef();
	const reveal = useReveal(ref);
	
	const spring = useSpring({
		// transform: reveal ? 'translateY(0)' : 'translateY(1000px)',
		opacity: reveal ? 1 : 0,
		config: config.slow
	})

	return (
		<animated.div style={spring} ref={ref} className="footer-container">
			<div className="footer-content">
				<div className="footer-links">
					<h4>Works</h4>
					<h4>About</h4>
					<h4>Contact</h4>
					<span>2020 Copyright Brad Francis</span>
				</div>
				<div className="footer-socials">
					<div className="footer-socials-content">
						<h4>Follow Me.</h4>
						<button><IoLogoTwitter className="footer-icon"/></button>
						<button><IoLogoLinkedin className="footer-icon"/></button>
						<button><IoLogoInstagram className="footer-icon"/></button>
						<button><IoMdMail className="footer-icon" /></button>
					</div>
				</div>
			</div>
		</animated.div>
	)
}

export default Footer;