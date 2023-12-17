import { React } from 'react';
// import { Link } from 'react-router-dom';
import Style from './home.module.scss';
import { Intro, About, Reviews, Forms, Contact, ScrollProvider } from 'components';
// import { useHasIntersected } from 'components';

export default function Home() {
	return (
		<div className={Style.Home}>
			<ScrollProvider>
				<Intro />
				<About />
				<Reviews />
				<Forms />
				<Contact />
			</ScrollProvider>
		</div>
	);
}
