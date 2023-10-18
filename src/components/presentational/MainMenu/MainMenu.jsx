import { React } from 'react';
import Style from './mainMenu.module.scss';

export default function MainMenu() {
	return (
		<menu className={Style.Menu}>
			<section className={Style.About}></section>
			<section className={Style.Reviews}></section>
			<section className={Style.Forms}></section>
			<section className={Style.Contact}></section>
		</menu>
	);
}
