import React from 'react';
import './styles.scss';
import { IoMdEye } from 'react-icons/io';

const Button = ({ title, onClick, isNav }) => {
	return (
		<button className="button-generic-container" onClick={() => onClick()}>{title}{isNav && <IoMdEye style={{ marginLeft: '1rem' }} />}</button>
	)
}

export default Button;