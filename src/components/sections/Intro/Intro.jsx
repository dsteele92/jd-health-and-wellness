import { React, forwardRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import Style from './intro.module.scss';
import { MainMenu } from 'components';

const Intro = forwardRef((props, ref) => {
	return (
		<div className={Style.Intro} ref={ref}>
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
});

export default Intro;
