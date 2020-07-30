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
		opacity: reveal ? 1 : 0,
	})

	return (
		<div ref={ref} className="about-container">
			<animated.div style={leftSpring} className="about-info">
				<h1>About Me.</h1>
				<span>My name is Brad and I'm a Freelance Web Developer based in Melbourne, Australia. I've been coding and designing for just about 9 years and recently spent two years in the Video Game and App Industry.</span>
				<span>Supporting businesses that are falling behind with new technology and bringing them back up to where they should be, in this ever-changing world of technology.</span>
				<span>I enjoy working with other various technologies, not just websites. Such as AR and Apps that help people in a meaningful way. I'm just finding my feet as a freelancer so if you have any questions at all or just want to chat, send it my way below.</span>
			</animated.div>
			<animated.div style={rightSpring} className="about-image" />
		</div>
	)
}

export default About;