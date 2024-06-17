import { React, forwardRef } from 'react';
import Style from './navbar.module.scss';

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

	return (
		<div>
			<div className={Style.Navbar} ref={ref}>
				<section>
					<div
						className={`${Style.NavLink} ${currentSection === 1 ? Style.Current : ''}`}
						onClick={scrollToAbout}>
						About
					</div>
					<div
						className={`${Style.NavLink} ${currentSection === 2 ? Style.Current : ''}`}
						onClick={scrollToStaff}>
						Staff
					</div>
					<div
						className={`${Style.NavLink} ${currentSection === 3 ? Style.Current : ''}`}
						onClick={scrollToReviews}>
						Reviews
					</div>
				</section>
				<div>
					<img
						src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1697653224/JD/logo_txsiex.png'
						alt='JD Health and Wellness Logo'
						className={Style.NavLogo}
						onClick={scrollToIntro}
					/>
				</div>
				<section>
					<div
						className={`${Style.NavLink} ${currentSection === 4 ? Style.Current : ''}`}
						onClick={scrollToForms}>
						Forms
					</div>
					<div
						className={`${Style.NavLink} ${currentSection === 5 ? Style.Current : ''}`}
						onClick={scrollToContact}>
						Contact
					</div>
					<div className={Style.NavLink}>
						<a href='http://practiceportal.intelichart.com/' target='_blank' rel='noopener noreferrer'>
							Patient Portal
						</a>
					</div>
				</section>
			</div>
		</div>
	);
});

export default Navbar;
