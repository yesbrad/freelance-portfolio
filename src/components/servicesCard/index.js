import React, { useState, useRef, useEffect } from 'react';
import './styles.scss';
import { animated, useSpring, config } from 'react-spring';
import { useReveal } from '../../hooks';

const ServicesCard = ({ serviceInfo, style }) => {
	const { title, suits, image, description, included } = serviceInfo;
	const ref = useRef();
	const reveal = useReveal(ref);

	const renderSuits = suits.map((data) => (
		<div key={data} className="services-card-suit">
			<span>{data}</span>
		</div>
	))	

	const spring = useSpring({
		transform: reveal ? 'translateY(0) rotate(0)' : 'translateY(40px) rotate(5deg)',
		opacity: reveal ? 1 : 0,
		config: { tension: 300, friction: 15}
	});

	return (
		<div ref={ref} key={title} className="services-card-container">
			<animated.div key={title} style={style} className="services-card-content">
				<h2>{title}</h2>
				<div style={{background: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className="services-image"></div>
				<h3>Suitible For:</h3>
				<div className="services-card-suit-container">
					{renderSuits}
				</div>
				<div className="services-card-description">
					{description.split('\n').map((item, i) => {
						return <span key={i}>{item}</span>;
					})}
				</div>
				<h3>Services Included:</h3>
				<div className="services-included">
					{included.map(inc => <span>- {inc}</span>)}
				</div>
			</animated.div>
		</div>
	)
}

export default ServicesCard;