import { useState, useEffect } from 'react';

export const useReveal = (ref) => {
	const [pos, setPos] = useState(false);

	const handleScroll = () => {
		const posOn = (window.innerHeight - window.innerHeight / 3 > ref.current.getBoundingClientRect().y);
		setPos(posOn);
	};
	
	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return pos;
}