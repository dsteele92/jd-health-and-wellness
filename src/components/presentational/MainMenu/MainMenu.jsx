import { React, useEffect, useState } from 'react';
import Style from './mainMenu.module.scss';

export default function MainMenu() {
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowMenu(true);
		}, 500);
	}, []);

	return (
		<menu className={Style.Menu}>
			<section className={Style.About}>
				<div className={showMenu ? Style.BubbleShow : Style.Bubble}>
					<div className={Style.BubbleInner}></div>
					<div className={Style.Content}>
						<h4>About Us</h4>
						<div className={Style.SubLinks}>
							<h4>Our Services</h4>
							<h4>Meet the Team</h4>
							<h4>Community & Government</h4>
						</div>
					</div>
				</div>
			</section>
			<section className={Style.Reviews}>
				<div className={showMenu ? Style.BubbleShow : Style.Bubble}>
					<div className={Style.BubbleInner}></div>
					<div className={Style.Content}>
						<h4>Reviews</h4>
					</div>
				</div>
			</section>
			<section className={Style.Forms}>
				<div className={showMenu ? Style.BubbleShow : Style.Bubble}>
					<div className={Style.BubbleInner}></div>
					<div className={Style.Content}>
						<h4>Patient Forms</h4>
					</div>
				</div>
			</section>
			<section className={Style.Contact}>
				<div className={showMenu ? Style.BubbleShow : Style.Bubble}>
					<div className={Style.BubbleInner}></div>
					<div className={Style.Content}>
						<h4>Contact Us</h4>
					</div>
				</div>
			</section>
		</menu>
	);
}
