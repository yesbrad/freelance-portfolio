import React from 'react';
import './styles.scss';
import ServicesCard from '../servicesCard';
import serviceInfo from '../../data/services';

const Services = () => {
	const renderCards = serviceInfo.map((serv, i) => <ServicesCard serviceInfo={serv} index={i} />);
	
	return (
		<div className="services-container">
			{renderCards}
		</div>
	)
}

export default Services;