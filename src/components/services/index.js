import React, { useRef } from 'react';
import './styles.scss';
import ServicesCard from '../servicesCard';
import serviceInfo from '../../data/services';
import { useTrail } from 'react-spring';
import { useReveal } from '../../hooks';
const Services = () => {
	const ref = useRef();
	const reveal = useReveal(ref);
	
	const springs = useTrail(serviceInfo.length, {	
		transform: reveal ? 'translateY(0) rotate(0)' : 'translateY(340px) rotate(5deg)',
		config: {mass: 2, tension: 350, friction: 25}
	});
	
	return (
		<div ref={ref} className="services-container">
			{springs.map((style, i) => <ServicesCard style={style} serviceInfo={serviceInfo[i]}/>)}
		</div>
	)
}

export default Services;