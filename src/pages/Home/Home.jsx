import { React } from 'react';
// import { Link } from 'react-router-dom';
import Style from './home.module.scss';
import { Intro, About } from 'components';
// import { useHasIntersected } from 'components';

export default function Home() {
	return (
		<div className={Style.Home}>
			<Intro />
			<About />
		</div>
	);
}
