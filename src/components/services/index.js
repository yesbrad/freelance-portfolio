import React from 'react';
import './styles.scss';
import ServicesCard from '../servicesCard';
import serviceInfo from '../../data/services';

const Services = () => {
	const renderCards = serviceInfo.map(serv => <ServicesCard serviceInfo={serv} />);
	
	return (
		<div className="services-container">
			{renderCards}
		</div>
	)
}

export default Services;