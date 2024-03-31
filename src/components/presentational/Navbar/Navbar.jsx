import { React, useState, useEffect, forwardRef } from 'react';
import Style from './navbar.module.scss';
import { useScroll } from 'components';

const Navbar = forwardRef((props, ref) => {
	const {
		scrollToIntro,
		scrollToAbout,
		scrollToStaff,
		scrollToReviews,
		scrollToForms,
		scrollToContact,
		currentSection,
	} = props;
	const [top, setTop] = useState(true);
	const { scrollY } = useScroll();

	useEffect(() => {
		if (scrollY >= 30) {
			setTop(false);
		} else if (scrollY < 30) {
			setTop(true);
		}
	}, [scrollY]);

	return (
		<div>
			<div className={Style[`Navbar${top ? '' : 'Scrolled'}`]} ref={ref}>
				<div>
					<img
						src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1697653224/JD/logo_txsiex.png'
						alt='JD Health and Wellness Logo'
						className={Style.NavLogo}
						onClick={scrollToIntro}
					/>
				</div>
				<div
					className={`${!top ? Style.NavLink : Style.NavLinkHide} ${
						currentSection === 1 ? Style.Current : ''
					}`}
					onClick={scrollToAbout}>
					About
				</div>
				<div
					className={`${!top ? Style.NavLink : Style.NavLinkHide} ${
						currentSection === 2 ? Style.Current : ''
					}`}
					onClick={scrollToStaff}>
					Staff
				</div>
				<div
					className={`${!top ? Style.NavLink : Style.NavLinkHide} ${
						currentSection === 3 ? Style.Current : ''
					}`}
					onClick={scrollToReviews}>
					Reviews
				</div>
				<div
					className={`${!top ? Style.NavLink : Style.NavLinkHide} ${
						currentSection === 4 ? Style.Current : ''
					}`}
					onClick={scrollToForms}>
					Patient Forms
				</div>
				<div
					className={`${!top ? Style.NavLink : Style.NavLinkHide} ${
						currentSection === 5 ? Style.Current : ''
					}`}
					onClick={scrollToContact}>
					Contact
				</div>

				<div className={!top ? Style.PortalScrolled : Style.Portal}>
					<a
						href='https://patientportal.intelichart.com/login/Account/Login?ReturnUrl=%2f'
						target='_blank'
						rel='noopener noreferrer'>
						Patient Portal
					</a>
				</div>
			</div>
		</div>
	);
});

export default Navbar;
