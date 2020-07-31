import React from 'react';
import './styles.scss';
import Button from '../button';
import { Link } from 'react-scroll';

const Home = () => {
	return (
		<div className="home-container">
			<div className="home-content-container">
				<div class="home-content-gradient">
					<div className="home-content-header">
						<h2>BRAD FRANCIS</h2>
						<h1>WEB DEVELOPER</h1>
					</div>
					<nav>
						<div className="home-content-nav-container">
							<Link to="services" className="home-content-nav-button" smooth>SERVICES</Link>
							<Link to="works" className="home-content-nav-button" smooth>WORKS</Link>
							<Link to="about" className="home-content-nav-button" smooth>ABOUT</Link>
							<div className="home-content-nav-action"><Button isNav to="contact" title="Get a Quote"/></div>
						</div>
					</nav>
					<div className="home-content-action-buttons">
						<div className="home-content-button">
							<Button title="Get a Quote" isNav to="contact"/>
						</div>
						<div className="home-content-button" id="home-content-removed">
							<Button isNav to="contact" title="Services" />
						</div>
					</div>
					<div className="home-content-hook">
						<h1>WEB DEVELOPER FROM MELBOURNE, AUSTRALIA</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;