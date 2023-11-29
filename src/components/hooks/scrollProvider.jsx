// ScrollContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
	const [scrollY, setScrollY] = useState(0);

	const handleScroll = () => {
		setScrollY(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return <ScrollContext.Provider value={{ scrollY }}>{children}</ScrollContext.Provider>;
};

export const useScroll = () => {
	return useContext(ScrollContext);
};
