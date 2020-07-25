import React, { useState, useRef, useEffect } from 'react';
import './styles.scss';
import { animated, useSpring, config } from 'react-spring';
import { useReveal } from '../../hooks';

const ServicesCard = ({ serviceInfo }) => {
	const { title, suits, image, description } = serviceInfo;
	const ref = useRef();
	const reveal = useReveal(ref);

	const renderSuits = suits.map((data) => (
		<div className="services-card-suit">
			<span>{data}</span>
		</div>
	))
	
	const spring = useSpring({
		transform: reveal ? 'translateY(0)' : 'translateY(40px)',
		config: {...config.wobbly, tension: 300, friction: 7}
	});

	return (
		<div ref={ref} className="services-card-container">
			<animated.div style={spring} className="services-card-content">
				<h2>{title}</h2>
				<div className="services-card-suit-container">
					{renderSuits}
				</div>
				<div className="services-card-description">
					<span>{description}</span>
				</div>
			</animated.div>
		</div>
	)
}

export default ServicesCard;