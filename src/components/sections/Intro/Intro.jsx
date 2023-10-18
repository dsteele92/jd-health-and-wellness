import { React } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import Style from './intro.module.scss';
import { MainMenu } from 'components';

export default function Intro() {
	return (
		<div className={Style.Intro}>
			<div className={Style.BackgroundWrapper}>
				<img
					className={Style.Background}
					src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1697638379/JD/mt_hood_unsplash_cjdqfv.jpg'
					alt='mt hood background'
				/>
			</div>
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
