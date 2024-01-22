import { React, useRef, useEffect, useState } from 'react';
import Style from './home.module.scss';
import {
	Navbar,
	MobileNav,
	Intro,
	About,
	Reviews,
	ReviewsMobile,
	Forms,
	FormsMobile,
	Contact,
	useScroll,
	Footer,
} from 'components';

export default function Home() {
	const navbar = useRef();
	const intro = useRef();
	const about = useRef();
	const reviews = useRef();
	const forms = useRef();
	const contact = useRef();
	const [currentSection, setCurrentSection] = useState(0);

	const { scrollY } = useScroll();

	const windowWidth = window.innerWidth;

	useEffect(() => {
		if (scrollY >= contact.current.offsetTop - navbar.current.clientHeight - 5) {
			setCurrentSection(4);
		} else if (scrollY >= forms.current.offsetTop - navbar.current.clientHeight - 5) {
			setCurrentSection(3);
		} else if (scrollY >= reviews.current.offsetTop - navbar.current.clientHeight - 5) {
			setCurrentSection(2);
		} else if (scrollY >= about.current.offsetTop - navbar.current.clientHeight - 5) {
			setCurrentSection(1);
		} else {
			setCurrentSection(0);
		}
	}, [scrollY]);

	const scrollToIntro = () => {
		const offset = intro.current.offsetTop - navbar.current.clientHeight - 5;
		window.scrollTo({ top: offset, behavior: 'smooth' });
	};
	const scrollToAbout = () => {
		const offset = about.current.offsetTop - navbar.current.clientHeight - 5;
		window.scrollTo({ top: offset, behavior: 'smooth' });
	};
	const scrollToReviews = () => {
		const offset = reviews.current.offsetTop - navbar.current.clientHeight - 5;
		window.scrollTo({ top: offset, behavior: 'smooth' });
	};
	const scrollToForms = () => {
		const offset = forms.current.offsetTop - navbar.current.clientHeight - 5;
		window.scrollTo({ top: offset, behavior: 'smooth' });
	};
	const scrollToContact = () => {
		const offset = contact.current.offsetTop - navbar.current.clientHeight - 5;
		window.scrollTo({ top: offset, behavior: 'smooth' });
	};

	const scrollToMobileIntro = () => {
		const offset = intro.current.offsetTop - 5;
		window.scrollTo({ top: offset });
	};
	const scrollToMobileAbout = () => {
		const offset = about.current.offsetTop - 5;
		window.scrollTo({ top: offset });
	};
	const scrollToMobileReviews = () => {
		const offset = reviews.current.offsetTop - 5;
		window.scrollTo({ top: offset });
	};
	const scrollToMobileForms = () => {
		const offset = forms.current.offsetTop - 5;
		window.scrollTo({ top: offset });
	};
	const scrollToMobileContact = () => {
		const offset = contact.current.offsetTop - 5;
		window.scrollTo({ top: offset });
	};

	return (
		<div className={Style.Home}>
			<Navbar
				ref={navbar}
				scrollToIntro={scrollToIntro}
				scrollToAbout={scrollToAbout}
				scrollToReviews={scrollToReviews}
				scrollToForms={scrollToForms}
				scrollToContact={scrollToContact}
				currentSection={currentSection}
			/>
			<MobileNav
				scrollToIntro={scrollToMobileIntro}
				scrollToAbout={scrollToMobileAbout}
				scrollToReviews={scrollToMobileReviews}
				scrollToForms={scrollToMobileForms}
				scrollToContact={scrollToMobileContact}
				currentSection={currentSection}
			/>
			<Intro
				ref={intro}
				scrollToAbout={scrollToAbout}
				scrollToReviews={scrollToReviews}
				scrollToForms={scrollToForms}
				scrollToContact={scrollToContact}
			/>
			<About ref={about} />
			{windowWidth < 768 ? <ReviewsMobile ref={reviews} /> : <Reviews ref={reviews} />}
			{windowWidth < 768 ? <FormsMobile ref={forms} /> : <Forms ref={forms} />}
			<Contact ref={contact} />
			<Footer />
		</div>
	);
}
