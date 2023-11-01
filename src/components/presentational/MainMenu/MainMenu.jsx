import { React } from 'react';
import Style from './mainMenu.module.scss';

export default function MainMenu() {
	return (
		<menu className={Style.Menu}>
			<section className={Style.About}>
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
			<section className={Style.Reviews}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<h4>Reviews</h4>
				</div>
			</section>
			<section className={Style.Forms}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<h4>Patient Forms</h4>
				</div>
			</section>
			<section className={Style.Contact}>
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
