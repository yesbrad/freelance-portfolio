import React, { useRef } from 'react';
import './styles.scss';
import { animated, useSpring } from 'react-spring';
import { useReveal } from '../../hooks';

const About = () => {
	const ref = useRef();
	const reveal = useReveal(ref);
	
	const leftSpring = useSpring({
		transform: reveal ? 'translateY(0)' : 'translateY(1000px)',
		opacity: reveal ? 1 : 0,
	})

	const rightSpring = useSpring({
		transform: reveal ? 'translateY(0)' : 'translateY(1000px)',
		delay: 100,
	})

	return (
		<div ref={ref} className="about-container">
			<animated.div style={leftSpring} className="about-info">
				<h1>About Me.</h1>
				<span>My name is Brad and I'm a Freelance Web Developer based in Melbourne, Australia. I've been coding and designing for just about 9 years and recently spent two years in the Game and App Industry.</span>
				<span>Supporting the businesses that are falling behind with new technology and bring them back up to where they should be, in this ever-changing world of technology, is a major driver for me.</span>
				<span>I enjoy working with various technologies, not just websites. But also things like AR and Apps that help people in a meaningful way. I'm just finding my feet as a freelancer so if you have any questions at all or just want to chat, send it my way below.</span>
			</animated.div>
			<animated.div style={rightSpring} className="about-image" />
		</div>
	)
}

export default About;