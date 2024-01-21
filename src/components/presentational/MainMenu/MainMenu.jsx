import { React, useEffect, useState } from 'react';
import Style from './mainMenu.module.scss';
import { RxOpenInNewWindow } from 'react-icons/rx';

export default function MainMenu(props) {
	const [showMenu, setShowMenu] = useState(false);

	const { scrollToAbout, scrollToReviews, scrollToForms, scrollToContact } = props;

	useEffect(() => {
		setTimeout(() => {
			setShowMenu(true);
		}, 100);
	}, []);

	return (
		<menu className={Style.Menu}>
			<section
				className={`${Style.About} ${showMenu ? Style.MenuSectionShow : Style.MenuSection}`}
				onClick={scrollToAbout}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.MenuHeader}>About Us</div>
					<div className={Style.SubLinks}>
						<div className={Style.MenuHeader}>Our Services</div>
						<div className={Style.MenuHeader}>Meet the Team</div>
						<div className={Style.MenuHeader}>Community & Government</div>
					</div>
				</div>
			</section>
			<section
				className={`${Style.Reviews} ${showMenu ? Style.MenuSectionShow : Style.MenuSection}`}
				onClick={scrollToReviews}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.MenuHeader}>Reviews</div>
				</div>
			</section>
			<section
				className={`${Style.Forms} ${showMenu ? Style.MenuSectionShow : Style.MenuSection}`}
				onClick={scrollToForms}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.MenuHeader}>Patient Forms</div>
				</div>
			</section>
			<section
				className={`${Style.Contact} ${showMenu ? Style.MenuSectionShow : Style.MenuSection}`}
				onClick={scrollToContact}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.MenuHeader}>Contact Us</div>
				</div>
			</section>
			<section className={`${Style.Portal} ${showMenu ? Style.MenuSectionShow : Style.MenuSection}`}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<a
					href='https://patientportal.intelichart.com/login/Account/Login?ReturnUrl=%2f'
					target='_blank'
					rel='noopener noreferrer'>
					<div className={Style.Content}>
						<div className={Style.MenuHeader}>
							Patient Portal{' '}
							<span>
								<RxOpenInNewWindow />
							</span>
						</div>
					</div>
				</a>
			</section>
		</menu>
	);
}
