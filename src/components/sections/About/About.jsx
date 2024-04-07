import { React, useEffect, useRef, forwardRef } from 'react';
import Style from './about.module.scss';
import { SectionHeader, useHasIntersected, useScroll } from 'components';
import { PiArrowBendRightDownThin } from 'react-icons/pi';
import { Stack } from '@mantine/core';

const About = forwardRef((props, ref) => {
	const [whoWeAre, whoWeAreIntersected] = useHasIntersected({ threshold: 0.25 });

	const circleText = useRef();
	const { scrollY } = useScroll();

	useEffect(() => {
		const delta = (scrollY / 10) % 360;
		circleText.current.style.transform = `rotateZ(${delta % 360}deg)`;
	}, [scrollY]);

	return (
		<div className={Style.AboutSection} ref={ref}>
			<Stack className={Style.InnerWrapper}>
				<div className={Style.AboutSubSection} ref={whoWeAre}>
					<SectionHeader top='Who We Are' />
					<div className={Style.Content}>
						<div className={Style[`IntroText${whoWeAreIntersected ? 'Show' : ''}`]}>
							<h3>
								JD Health & Wellness Center has been serving patients in the Salem, Oregon area for over
								30 years in a variety of health and wellness services from primary care to mental health
								and addiction. Regardless of what kind of pain you are experiencing we believe in all
								methods from traditional to alternative medicine. We believe in treating the whole
								person not just their symptoms, we see the body as an interconnected system working to
								strengthen both body and mind to improve one’s complete health.
							</h3>
						</div>
						<div className={Style[`VideoContainer${whoWeAreIntersected ? 'Show' : ''}`]}>
							<video controls>
								<source
									src='https://jd-health-and-wellness.s3.us-west-2.amazonaws.com/JDHW_Better-Together-2.mp4'
									type='video/mp4'
								/>
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</div>
			</Stack>
			<div className={Style.SpinnerContainer}>
				<div className={Style.Circle}>
					<img
						src='https://jd-health-and-wellness.s3.us-west-2.amazonaws.com/SeeOurServices.png'
						alt='See our services'
						className={Style.CircleText}
						ref={circleText}
					/>
					<PiArrowBendRightDownThin />
				</div>
			</div>
			<img
				src='https://jd-health-and-wellness.s3.us-west-2.amazonaws.com/pine_tree_horizon_teal.png'
				alt='pine tree horizon outline'
				className={Style.PineTrees}
			/>
		</div>
	);
});

export default About;
