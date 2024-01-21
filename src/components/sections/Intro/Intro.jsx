import { React, forwardRef } from 'react';
import Style from './intro.module.scss';
import { MainMenu } from 'components';

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
				<MainMenu
					scrollToAbout={scrollToAbout}
					scrollToReviews={scrollToReviews}
					scrollToForms={scrollToForms}
					scrollToContact={scrollToContact}
				/>
			</div>
		</div>
	);
});

export default Intro;
