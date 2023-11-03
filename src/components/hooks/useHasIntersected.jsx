import { useState, useEffect, useRef } from 'react';

export default function useHasIntersected(options) {
	const [hasIntersected, setHasIntersected] = useState(false);
	const section = useRef();

	useEffect(() => {
		const entries = section.current;
		const observer = new IntersectionObserver((entries, observer) => {
			const [entry] = entries;
			setHasIntersected(entry.isIntersecting);
			// console.log(entry);
			// console.log(`${entry.target.className}: ${entry.hasIntersected}`);
		}, options);

		observer.observe(entries);

		if (hasIntersected) {
			observer.unobserve(entries);
		}

		return () => {
			observer.unobserve(entries);
		};
	}, [options, hasIntersected]);

	return [section, hasIntersected];
}
