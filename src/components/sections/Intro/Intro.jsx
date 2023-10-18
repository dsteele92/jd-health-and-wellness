import { React } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import Style from './intro.module.scss';
import { MainMenu } from 'components';

export default function Intro() {
	return (
		<div className={Style.Intro}>
			<div className={Style.Tint}>
				<div className={Style.Headers}>
					<div className={Style.Title}>
						<div className={Style.JD}>JD</div>
						<div className={Style.HW}>
							Health &<br />
							Wellness
						</div>
					</div>
				</div>
				<MainMenu />
			</div>
		</div>
	);
}
