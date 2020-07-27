import React from 'react';
import './styles.scss';

const Title = ({ title }) => {
	return (
		<div className="title-main-container">
			<span>{title}</span>
		</div>
	)
}

export default Title;