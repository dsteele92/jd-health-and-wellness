import { React } from 'react';
// import { Link } from 'react-router-dom';
import Style from './home.module.scss';
import { Intro, About, ScrollProvider } from 'components';
// import { useHasIntersected } from 'components';

export default function Home() {
	return (
		<div className={Style.Home}>
			<ScrollProvider>
				<Intro />
				<About />
			</ScrollProvider>
		</div>
	);
}
