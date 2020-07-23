import React from 'react';
import './styles.scss';

const ServicesCard = ({ serviceInfo }) => {
	const { title, suits, image, description } = serviceInfo;

	const renderSuits = suits.map((data) => (
		<div className="services-card-suit">
			<span>{data}</span>
		</div>
	))
	
	return (
		<div className="services-card-container">
			<div className="services-card-content">
				<h2>{title}</h2>
				<div className="services-card-suit">
					{renderSuits}
				</div>
				<div className="services-card-description">
					{description}
				</div>
			</div>
		</div>
	)
}

export default ServicesCard;