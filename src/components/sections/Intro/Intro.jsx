import { React, forwardRef } from 'react';
import Style from './intro.module.scss';
import { ButtonSquare } from 'components';
import { HiArrowLongDown } from 'react-icons/hi2';

const Intro = forwardRef((props, ref) => {
	const { scrollToAbout, scrollToForms } = props;
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
				<div className={Style.Center}>
					<h2 className={Style.Subtitle}>Serving Oregon for over 40 years</h2>
					<div className={Style.Buttons}>
						<ButtonSquare text='Patient Forms' minWidth='16rem' onClick={scrollToForms} />
						<a
							href='https://patientportal.intelichart.com/login/Account/Login?ReturnUrl=%2f'
							target='_blank'
							rel='noopener noreferrer'>
							<ButtonSquare text='Patient Portal' minWidth='16rem' />
						</a>
					</div>
				</div>
				<div className={Style.Arrow}>
					<div className={Style.Bounce} onClick={scrollToAbout}>
						<HiArrowLongDown />
					</div>
				</div>
			</div>
		</div>
	);
});

export default Intro;
