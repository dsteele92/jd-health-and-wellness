import { React, forwardRef } from 'react';
import Style from './intro.module.scss';
import { MainMenu } from 'components';
import { HiArrowLongDown } from 'react-icons/hi2';

const Intro = forwardRef((props, ref) => {
	const { scrollToAbout, scrollToReviews, scrollToForms, scrollToContact } = props;
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
