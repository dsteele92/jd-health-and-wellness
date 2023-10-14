import { React, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Style from './navbar.module.scss';
import logo from '../../../images/logo.png';

export default function Navbar() {
	const [top, setTop] = useState(true);

	useEffect(() => {
		const handleScroll = (event) => {
			// console.log(window.pageYOffset);
			if (window.pageYOffset >= 30) {
				setTop(false);
			} else if (window.pageYOffset < 30) {
				setTop(true);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			<div className={top ? Style.Navbar : Style.NavbarScrolled}>
				<div>
					<Link to='/'>
						<img src={logo} alt='JD Health and Wellness Logo' style={{ height: '50px' }} />
					</Link>
				</div>
				<div className={!top ? Style.NavLink : Style.NavLinkHide}>
					<Link to='/'>Home</Link>
				</div>
				<div className={!top ? Style.NavLink : Style.NavLinkHide}>
					<Link to='/about'>About</Link>
				</div>
				<div className={!top ? Style.NavLink : Style.NavLinkHide}>
					<Link to='/reviews'>Reviews</Link>
				</div>
				<div className={!top ? Style.NavLink : Style.NavLinkHide}>
					<Link to='/forms'>Patient Forms</Link>
				</div>
				<div className={!top ? Style.NavLink : Style.NavLinkHide}>
					<Link to='/contact'>Contact</Link>
				</div>
				<div className={!top ? Style.NavLinkPortalScrolled : Style.NavLinkPortal}>
					<a href='https://www.linkedin.com/in/daltondsteele/' target='_blank' rel='noopener noreferrer'>
						Patient Portal
					</a>
				</div>
			</div>
		</div>
	);
}
