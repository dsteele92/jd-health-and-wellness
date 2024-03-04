import { React, useEffect, useRef, useState, forwardRef } from 'react';
import Style from './about.module.scss';
import { SectionHeader, useHasIntersected, Services, ServicesMobile, Staff, StaffMobile, useScroll } from 'components';
import { PiArrowBendRightDownThin } from 'react-icons/pi';
import { Transition } from '@mantine/core';
import { communityLinks } from 'content';

const About = forwardRef((props, ref) => {
	const [about, aboutIntersected] = useHasIntersected();
	// const [CTA, CTAIntersected] = useHasIntersected();
	// const [video, videoIntersected] = useHasIntersected();
	// const [community, communityIntersected] = useHasIntersected();
	// const [communityLinkSelected, setCommunityLinkSelected] = useState(-1);

	const circleText = useRef();

	const { scrollY } = useScroll();

	const windowWidth = window.innerWidth;

	useEffect(() => {
		const delta = (scrollY / 10) % 360;
		if (aboutIntersected) {
			circleText.current.style.transform = `rotateZ(${delta % 360}deg)`;
		}
	}, [scrollY, aboutIntersected]);

	return (
		<div className={Style.AboutSection} ref={ref}>
			<div className={aboutIntersected ? Style.AboutShow : Style.About} ref={about}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.WhoWeAre}>
						<div className={Style.SectionHeader}>
							<h3>Who We Are</h3>
						</div>
						<h3 className={Style.IntroText}>
							JD Health & Wellness Center has been serving patients in the Salem, Oregon area for over 30
							years in a variety of health and wellness services from primary care to mental health and
							addiction. Regardless of what kind of pain you are experiencing we believe in all methods
							from traditional to alternative medicine. We believe in treating the whole person not just
							their symptoms, we see the body as an interconnected system working to strengthen both body
							and mind to improve one’s complete health.
						</h3>
					</div>
					<div className={Style.Story}>
						<div className={Style.SectionHeader}>
							<h3>Our Story</h3>
						</div>
						<div className={Style.VideoContainer}>
							<video controls>
								<source
									src='https://jd-health-and-wellness.s3.us-west-2.amazonaws.com/JDHW_Better-Together-2.mp4'
									type='video/mp4'
								/>
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
					<div className={Style.SpinnerContainer}>
						<div className={Style.Circle}>
							<img
								src='https://jd-health-and-wellness.s3.us-west-2.amazonaws.com/see-our-services.png'
								alt='See our services'
								className={Style.CircleText}
								ref={circleText}
							/>
							<PiArrowBendRightDownThin />
						</div>
					</div>
				</div>
			</div>
			{windowWidth >= 768 ? <Services /> : <ServicesMobile />}
			{/* <div className={CTAIntersected ? Style.CTAShow : Style.CTA} ref={CTA}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<h1>Schedule an appointment today!</h1>
					<a href='tel:5038771995'>
						<h2>Call (503) 877-1995</h2>
					</a>
				</div>
			</div> */}
			{/* <SectionHeader text='OUR STORY' section='About' />
			<div className={videoIntersected ? Style.VideoShow : Style.Video} ref={video}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.VideoContainer}>
						<video controls>
							<source
								src='https://jd-health-and-wellness.s3.us-west-2.amazonaws.com/JDHW_Better-Together-2.mp4'
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div> */}
			<Staff />
			{/* <SectionHeader text='COMMUNITY & GOVERNMENT' section='About' /> */}
			{/* <div className={communityIntersected ? Style.CommunityShow : Style.Community} ref={community}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.Links} onMouseLeave={() => setCommunityLinkSelected(-1)}>
						{communityLinks.map((item, index) => (
							<a href='/' target='_blank' rel='noopener noreferrer' key={index}>
								<div
									className={Style.Link}
									key={index}
									onMouseEnter={() => setCommunityLinkSelected(index)}>
									<h3 className={Style.Article}>{item.name}</h3>
									<ButtonRound
										size={windowWidth < 768 ? 'small' : 'medium'}
										active={communityLinkSelected === index ? true : false}
									/>
								</div>
							</a>
						))}
					</div>
				</div>
			</div> */}
		</div>
	);
});

export default About;
