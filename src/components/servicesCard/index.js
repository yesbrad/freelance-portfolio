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
				<div className="services-card-suit-container">
					{renderSuits}
				</div>
				<div className="services-card-description">
					<span>
						{description}
					</span>
				</div>
			</div>
		</div>
	)
}

export default ServicesCard;