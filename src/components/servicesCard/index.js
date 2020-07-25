import React, { useState, useRef, useEffect } from 'react';
import './styles.scss';
import { animated, useSpring, config } from 'react-spring';

const ServicesCard = ({ serviceInfo }) => {
	const { title, suits, image, description } = serviceInfo;
	const ref = useRef();
	const [pos, setPos] = useState(false);

	const handleScroll = () => {
		const positionEl = ref.current.getBoundingClientRect().y;
		const posOn = (window.innerHeight - window.innerHeight / 4 > (positionEl));
		// console.log(window.innerHeight, positionEl, posOn);
		setPos(posOn);
	};
	
	useEffect(() => {
		console.log(window.innerHeight);

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const renderSuits = suits.map((data) => (
		<div className="services-card-suit">
			<span>{data}</span>
		</div>
	))
	
	const spring = useSpring({
		transform: pos ? 'translateY(0)' : 'translateY(40px)',
		// opacity: pos ? 1 : 0,
		// delay: 50,
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