import { React, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Style from './home.module.scss';
// import { useHasIntersected } from 'components';

export default function Home() {
	const [top, setTop] = useState(true);

	// -----> Lazy Loading functions
	// const [titleWD, titleWDIntersected] = useHasIntersected({ threshold: 0.5 });

	return <div className={Style.Home}></div>;
}
