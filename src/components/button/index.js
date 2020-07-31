import React from 'react';
import './styles.scss';
import { IoMdEye } from 'react-icons/io';
import { Link } from 'react-scroll';

const Button = ({ title, onClick, isNav, to }) => {
	if (isNav) {
		return 	<Link to={to} smooth className="button-generic-container">{title}{<IoMdEye style={{ marginLeft: '1rem' }} />}</Link>
	}

	return (
		<button className="button-generic-container" onClick={() => onClick()}>{title}</button>
	)
}

export default Button;