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
					<h4>About Us</h4>
					<div className={Style.SubLinks}>
						<h4>Our Services</h4>
						<h4>Meet the Team</h4>
						<h4>Community & Government</h4>
					</div>
				</div>
			</section>
			<section className={`${Style.Reviews} ${showMenu ? Style.MenuSectionShow : Style.MenuSection}`}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<h4>Reviews</h4>
				</div>
			</section>
			<section className={`${Style.Forms} ${showMenu ? Style.MenuSectionShow : Style.MenuSection}`}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<h4>Patient Forms</h4>
				</div>
			</section>
			<section className={`${Style.Contact} ${showMenu ? Style.MenuSectionShow : Style.MenuSection}`}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<h4>Contact Us</h4>
				</div>
			</section>
		</menu>
	);
}
