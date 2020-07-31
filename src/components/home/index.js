import React, { useState } from 'react';
import './styles.scss';
import Button from '../button';
import { Link } from 'react-scroll';
import { IoMdMenu, IoIosClose } from 'react-icons/io';
import { useSpring, animated } from 'react-spring';

const Home = () => {
	const [isMenuOpen, SetIsMenuOpen] = useState(false);

	const menuSpringProps = useSpring({
		top: isMenuOpen ? '0' : '-50%',
		bottom: isMenuOpen ? '50%' : '100%',
	})

	return (
		<div className="home-container">
			<animated.div style={menuSpringProps} className="home-hamburger-menu-container">
				<button onClick={() => SetIsMenuOpen(false)}>
					<IoIosClose style={{width: '100%', height: '100%'}}/>
				</button>
				<Link to="services" className="home-menu-button" smooth>SERVICES</Link>
				<Link to="works"    className="home-menu-button" smooth>WORKS</Link>
				<Link to="about"    className="home-menu-button" smooth>ABOUT</Link>
				<Link to="contact" className="home-menu-button" smooth>CONTACT</Link>
			</animated.div>
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
						<button className="home-content-hamburger-button" onClick={() => SetIsMenuOpen(true)}>
							<IoMdMenu style={{width: '100%', height: '100%'}}/>
						</button>
					</nav>
					<div className="home-content-action-buttons">
						<div className="home-content-button">
							<Button title="Get a Quote" isNav to="contact"/>
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