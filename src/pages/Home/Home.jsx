import { React, useRef, useEffect, useState } from 'react';
import Style from './home.module.scss';
import {
	Navbar,
	MobileNav,
	Intro,
	About,
	Reviews,
	Forms,
	Contact,
	useScroll,
	Footer,
	Services,
	Staff,
	Community,
} from 'components';

export default function Home() {
	const navbar = useRef();
	const intro = useRef();
	const about = useRef();
	const services = useRef();
	const staff = useRef();
	const community = useRef();
	const reviews = useRef();
	const forms = useRef();
	const contact = useRef();
	const [currentSection, setCurrentSection] = useState(0);

	const { scrollY } = useScroll();

	useEffect(() => {
		if (scrollY >= contact.current.offsetTop - navbar.current.clientHeight - 5) {
			setCurrentSection(5);
		} else if (scrollY >= forms.current.offsetTop - navbar.current.clientHeight - 5) {
			setCurrentSection(4);
		} else if (scrollY >= reviews.current.offsetTop - navbar.current.clientHeight - 5) {
			setCurrentSection(3);
		} else if (scrollY >= staff.current.offsetTop - navbar.current.clientHeight - 5) {
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
	const scrollToStaff = () => {
		const offset = staff.current.offsetTop - navbar.current.clientHeight - 5;
		window.scrollTo({ top: offset, behavior: 'smooth' });
	};
	const scrollToReviews = () => {
		const offset = reviews.current.offsetTop - navbar.current.clientHeight - 5;
		window.scrollTo({ top: offset, behavior: 'smooth' });
	};
	const scrollToCommunity = () => {
		const offset = community.current.offsetTop - navbar.current.clientHeight - 5;
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
	const scrollToMobileCommunity = () => {
		const offset = community.current.offsetTop - 5;
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
		<div>
			<Navbar
				ref={navbar}
				scrollToIntro={scrollToIntro}
				scrollToAbout={scrollToAbout}
				scrollToStaff={scrollToStaff}
				scrollToReviews={scrollToReviews}
				scrollToCommunity={scrollToCommunity}
				scrollToForms={scrollToForms}
				scrollToContact={scrollToContact}
				currentSection={currentSection}
			/>
			<MobileNav
				scrollToIntro={scrollToMobileIntro}
				scrollToAbout={scrollToMobileAbout}
				scrollToStaff={scrollToStaff}
				scrollToReviews={scrollToMobileReviews}
				scrollToCommunity={scrollToMobileCommunity}
				scrollToForms={scrollToMobileForms}
				scrollToContact={scrollToMobileContact}
				currentSection={currentSection}
			/>
			<div className={Style.Home}>
				<Intro ref={intro} scrollToAbout={scrollToAbout} scrollToForms={scrollToForms} />
				<About ref={about} />
				<Services ref={services} />
				<Staff ref={staff} />
				<Reviews ref={reviews} />
				<Community ref={community} />
				<Forms ref={forms} />
				<Contact ref={contact} />
				<Footer />
			</div>
		</div>
	);
}
