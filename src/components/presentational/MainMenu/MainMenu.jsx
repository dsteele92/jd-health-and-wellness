import { React, useEffect, useState } from 'react';
import Style from './mainMenu.module.scss';

export default function MainMenu() {
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowMenu(true);
		}, 100);
	}, []);

	return (
		<menu className={Style.Menu}>
			<section className={`${Style.About} ${showMenu ? Style.MenuSectionShow : Style.MenuSection}`}>
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
			<section className={`${Style.Reviews} ${showMenu ? Style.MenuSectionShow : Style.MenuSection}`}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.MenuHeader}>Reviews</div>
				</div>
			</section>
			<section className={`${Style.Forms} ${showMenu ? Style.MenuSectionShow : Style.MenuSection}`}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.MenuHeader}>Patient Forms</div>
				</div>
			</section>
			<section className={`${Style.Contact} ${showMenu ? Style.MenuSectionShow : Style.MenuSection}`}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.MenuHeader}>Contact Us</div>
				</div>
			</section>
		</menu>
	);
}
