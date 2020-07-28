import React, { useRef, useState, useEffect } from 'react';
import './styles.scss';
import { animated, useSpring, useSprings, useTransition } from 'react-spring';
import { useReveal } from '../../hooks';
import Button from '../button';
import WorksData from '../../data/works';

let interval;

const Works = () => {
	const ref = useRef();
	const refHeight = useRef();
	const reveal = useReveal(ref);
	const [currentIndex, SetCurrentIndex] = useState(0)

	useEffect(() => {
		interval = setInterval(() => {
			SetCurrentIndex(cur => (cur + 1) % WorksData.length);
		}, 5000)

		return () => clearInterval(interval);
	}, [])
	
	const stopAutoScroll = (index) => {
		SetCurrentIndex(index);
		clearInterval(interval);
	}

	const revealSpring = useSpring({
		opacity: reveal ? 1 : 0
	})

	const springs = useTransition(currentIndex, item => item, {
		from: { transform: `translateX(-${window.innerWidth}px)` },
		enter: { transform: `translateX(0)` },
		leave: { transform: `translateX(${window.innerWidth}px)` }
	})	

	return (
		<animated.div ref={ref} style={{ ...revealSpring, height: refHeight.current ? `${refHeight.current.offsetHeight}px` : 0 }} className="works-container">
			{springs.map(({item, props, key}) => (
				<animated.div ref={refHeight} key={key} style={props} className="works-card-container">
					<div className="works-card-content">
						<div className="works-image"><div style={{background: `url(${WorksData[item].image})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div></div>
						<div className="works-info">
							<div className="works-info-content">
								<h1>{WorksData[item].title}</h1>
								<span className="works-info-about">{WorksData[item].description}</span>
								{WorksData[item].testimonial && <span className="works-info-test">{WorksData[item].testimonial}</span>}
								<Button title="View Site" onClick={() => window.open(WorksData[item].url)}/>
								<div className="works-pagnation">
									{WorksData.map((d, i) => <button onClick={() => stopAutoScroll(i)} id={i === currentIndex ? "works-pagnation-dot" : ''}></button>)}
								</div>
							</div>
						</div>
					</div>
				</animated.div>
			))}
		</animated.div>
	)
}

export default Works;