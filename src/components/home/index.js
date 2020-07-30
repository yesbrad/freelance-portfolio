import React from 'react';
import './styles.scss';
import Button from '../button';

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
							<button>SERVICES</button>
							<button>ABOUT</button>
							<button>PROJECTS</button>
							<div className="home-content-nav-action"><Button title="Get a Quote"/></div>
						</div>
					</nav>
					<div className="home-content-action-buttons">
						<div className="home-content-button">
							<Button title="Get a Quote" isNav/>
						</div>
						<div className="home-content-button" id="home-content-removed">
							<Button title="Services" />
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