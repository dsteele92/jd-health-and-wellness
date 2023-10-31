import { React } from 'react';
import Style from './mainMenu.module.scss';

export default function MainMenu() {
	return (
		<menu className={Style.Menu}>
			<section className={Style.About}>
				<h4>About Us</h4>
			</section>
			<section className={Style.Reviews}>
				<h4>Reviews</h4>
			</section>
			<section className={Style.Forms}>
				<h4>Patient Forms</h4>
			</section>
			<section className={Style.Contact}>
				<h4>Contact Us</h4>
			</section>
		</menu>
	);
}
