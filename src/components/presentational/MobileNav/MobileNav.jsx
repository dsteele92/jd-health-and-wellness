import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Style from './mobileNav.module.scss';
import { useScroll } from 'components';
import { RxOpenInNewWindow } from 'react-icons/rx';

export default function MobileNav(props) {
	const { scrollToIntro, scrollToAbout, scrollToReviews, scrollToForms, scrollToContact, currentSection } = props;
	const [top, setTop] = useState(true);
	const [openNav, setOpenNav] = useState(false);

	const { scrollY } = useScroll();
	useEffect(() => {
		if (scrollY >= 30) {
			setTop(false);
		} else if (scrollY < 30) {
			setTop(true);
		}
	}, [scrollY]);

	return (
		<div className={Style.MobileNav}>
			<div className={top ? Style.Logo : Style.LogoHide}>
				<Link to='/'>
					<img
						src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1697653224/JD/logo_txsiex.png'
						alt='JD Health and Wellness Logo'
						className={Style.MobileNavLogo}
					/>
				</Link>
			</div>
			<div className={Style.NavButton} onClick={() => setOpenNav(!openNav)}>
				<div className={Style.IconMobile}>
					<div className={Style.Bars}>
						<svg height='8px' width='40px' className={openNav ? Style.Bar1X : Style.Bar}>
							<line x1='10' y1='0' x2='30px' y2='0' className={Style.Line} />
						</svg>
						<svg height='8px' width='40px' className={openNav ? Style.Bar2X : Style.Bar}>
							<line x1='10' y1='0' x2='30px' y2='0' className={Style.Line} />
						</svg>
						<svg height='8px' width='40px' className={openNav ? Style.Bar3X : Style.Bar}>
							<line x1='10' y1='0' x2='30px' y2='0' className={Style.Line} />
						</svg>
					</div>
				</div>
			</div>
			<div className={openNav ? Style.NavBackgroundShow : Style.NavBackground}></div>
			<div className={Style.NavContainer}>
				<div className={openNav ? Style.TopActive : Style.Top}></div>
				<div className={openNav ? Style.BottomActive : Style.Bottom}></div>
				<div className={openNav ? Style.LeftActive : Style.Left}></div>
				<div className={openNav ? Style.RightActive : Style.Right}></div>
			</div>
			<menu className={openNav ? Style.MobileMenuActive : Style.MobileMenu}>
				<ul>
					<li
						className={openNav ? Style.ListFall : Style.List}
						onClick={() => {
							setOpenNav(!openNav);
							scrollToIntro();
						}}>
						<div className={currentSection === 0 ? Style.Current : ''}>
							<h3>Home</h3>
							<div className={currentSection === 0 ? Style.HighlightCurrentHome : ''}></div>
						</div>
					</li>
					<li
						className={openNav ? Style.ListFall : Style.List}
						onClick={() => {
							setOpenNav(!openNav);
							scrollToAbout();
						}}>
						<div className={currentSection === 1 ? Style.Current : ''}>
							<h3>About Us</h3>
							<div className={currentSection === 1 ? Style.HighlightCurrentAbout : ''}></div>
						</div>
					</li>
					<li
						className={openNav ? Style.ListFall : Style.List}
						onClick={() => {
							setOpenNav(!openNav);
							scrollToReviews();
						}}>
						<div className={currentSection === 2 ? Style.Current : ''}>
							<h3>Reviews</h3>
							<div className={currentSection === 2 ? Style.HighlightCurrentReviews : ''}></div>
						</div>
					</li>
					<li
						className={openNav ? Style.ListFall : Style.List}
						onClick={() => {
							setOpenNav(!openNav);
							scrollToForms();
						}}>
						<div className={currentSection === 3 ? Style.Current : ''}>
							<h3>Patient Forms</h3>
							<div className={currentSection === 3 ? Style.HighlightCurrentForms : ''}></div>
						</div>
					</li>
					<li
						className={openNav ? Style.ListFall : Style.List}
						onClick={() => {
							setOpenNav(!openNav);
							scrollToContact();
						}}>
						<div className={currentSection === 4 ? Style.Current : ''}>
							<h3>Contact</h3>
							<div className={currentSection === 4 ? Style.HighlightCurrentContact : ''}></div>
						</div>
					</li>
					<li className={openNav ? Style.ListFall : Style.List}>
						<a
							href='https://patientportal.intelichart.com/login/Account/Login?ReturnUrl=%2f'
							target='_blank'
							rel='noopener noreferrer'>
							<h3>
								Patient Portal{' '}
								<span>
									<RxOpenInNewWindow />
								</span>
							</h3>
						</a>
					</li>
				</ul>
			</menu>
		</div>
	);
}
