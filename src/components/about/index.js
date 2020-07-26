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
				<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, doloremque? Quae sapiente veniam amet nam! Temporibus molestias explicabo illum cupiditate distinctio, quaerat voluptas repellat mollitia, omnis consequuntur nulla culpa ducimus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, doloremque? Quae sapiente veniam amet nam! Temporibus molestias explicabo illum cupiditate distinctio, quaerat voluptas repellat mollitia, omnis consequuntur nulla culpa ducimus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, doloremque? Quae sapiente veniam amet nam! Temporibus molestias explicabo illum cupiditate distinctio, quaerat voluptas repellat mollitia, omnis consequuntur nulla culpa ducimus?</span>
			</animated.div>
			<animated.div style={rightSpring} className="about-image" />
		</div>
	)
}

export default About;