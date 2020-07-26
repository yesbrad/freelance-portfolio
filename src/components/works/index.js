import React, { useRef, useState, useEffect } from 'react';
import './styles.scss';
import { animated, useSpring, useSprings, useTransition } from 'react-spring';
import { useReveal } from '../../hooks';
import Button from '../button';

let data = [
	'yeet1',
	'yeet2',
	'yeet3',
	'yeet4',
	'yeet5',
	'yeet6',
	'yeet7',
	'yeet8',
]

let interval;

const Works = () => {
	const ref = useRef();
	const refHeight = useRef();
	const reveal = useReveal(ref);
	const [currentIndex, SetCurrentIndex] = useState(0)

	useEffect(() => {
		interval = setInterval(() => {
			SetCurrentIndex(cur => (cur + 1) % 8);
		}, 5000)

		return () => clearInterval(interval);
	}, [])
	
	const stopAutoScroll = (index) => {
		SetCurrentIndex(index);
		clearInterval(interval);
	}

	const springs = useTransition(currentIndex, item => item, {
		from: { transform: `translateX(-${window.innerWidth}px)` },
		enter: { transform: `translateX(0)` },
		leave: { transform: `translateX(${window.innerWidth}px)` }
	})	

	return (
		<div ref={ref} style={{ height: refHeight.current ? `${refHeight.current.offsetHeight}px` : 0 }} className="works-container">
			{springs.map(({item, props, key}) => (
				<animated.div ref={refHeight} key={key} style={props} className="works-card-container">
					<div className="works-card-content">
						<div className="works-image"></div>
						<div className="works-info">
							<div className="works-info-content">
								<h1>{data[item]}</h1>
								<span className="works-info-about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, doloremque? Quae sapiente veniam amet nam! Temporibus molestias explicabo illum cupiditate distinctio, quaerat voluptas repellat mollitia, omnis consequuntur nulla culpa ducimus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, doloremque? Quae sapiente veniam amet nam! Temporibus molestias explicabo illum cupiditate distinctio, quaerat voluptas repellat mollitia, omnis consequuntur nulla culpa ducimus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, doloremque? Quae sapiente veniam amet nam! Temporibus molestias explicabo illum cupiditate distinctio, quaerat voluptas repellat mollitia, omnis consequuntur nulla culpa ducimus?</span>
								<span className="works-info-test">"Here lies a testimonial. Lorem ipsum dolor sit amet." - John Smith</span>
								<Button title="View Site" />
								<div className="works-pagnation">
									{data.map((d, i) => <button onClick={() => stopAutoScroll(i)} id={i === currentIndex ? "works-pagnation-dot" : ''}></button>)}
								</div>
							</div>
						</div>
					</div>
				</animated.div>
			))}
		</div>
	)
}

export default Works;