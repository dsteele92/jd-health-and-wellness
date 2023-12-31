import { React, useEffect, useRef, useState, forwardRef } from 'react';
import Style from './about.module.scss';
import { SectionHeader, useHasIntersected, Services, Staff, useScroll, ButtonRound } from 'components';
import { PiArrowBendRightDownThin } from 'react-icons/pi';
import { communityLinks } from 'content';

const About = forwardRef((props, ref) => {
	const [aboutText, aboutTextIntersected] = useHasIntersected({ threshold: 0.25 });
	const [CTA, CTAIntersected] = useHasIntersected({ threshold: 0.25 });
	const [community, communityIntersected] = useHasIntersected({ threshold: 0.25 });
	const [communityLinkSelected, setCommunityLinkSelected] = useState(-1);

	const circleText = useRef();

	const { scrollY } = useScroll();

	useEffect(() => {
		const delta = (scrollY / 10) % 360;
		if (aboutTextIntersected) {
			circleText.current.style.transform = `rotateZ(${delta % 360}deg)`;
		}
	}, [scrollY, aboutTextIntersected]);

	return (
		<div className={Style.About} ref={ref}>
			<SectionHeader text='WHO WE ARE' section='About' />
			<div className={aboutTextIntersected ? Style.AboutTextShow : Style.AboutText} ref={aboutText}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<p>
						JD Health & Wellness Center has been serving patients in the Salem, Oregon area for over 30
						years in a variety of health and wellness services from primary care to mental health and
						addiction. Regardless of what kind of pain you are experiencing we believe in all methods from
						traditional to alternative medicine. We believe in treating the whole person not just their
						symptoms, we see the body as an interconnected system working to strengthen both body and mind
						to improve one’s complete health.
					</p>
					<div className={Style.Circle}>
						{/* <div className={Style.CircleText}>SEE OUR SERVICES</div> */}
						<img
							src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1701272999/Vector_ig0xqy.png'
							alt='See our services'
							className={Style.CircleText}
							ref={circleText}
						/>
						<PiArrowBendRightDownThin />
					</div>
				</div>
			</div>
			<Services />
			<div className={CTAIntersected ? Style.CTAShow : Style.CTA} ref={CTA}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<h1>Schedule an appointment today!</h1>
					<h2>Call (503) 877-1995</h2>
				</div>
			</div>
			<SectionHeader text='OUR STAFF' section='About' />
			<Staff />
			<SectionHeader text='COMMUNITY & GOVERNMENT' section='About' />
			<div className={communityIntersected ? Style.CommunityShow : Style.Community} ref={community}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.Links} onMouseLeave={() => setCommunityLinkSelected(-1)}>
						{communityLinks.map((item, index) => (
							<div
								className={Style.Link}
								key={index}
								onMouseEnter={() => setCommunityLinkSelected(index)}>
								<h3 className={Style.Article}>{item.name}</h3>
								<ButtonRound size='medium' active={communityLinkSelected === index ? true : false} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
});

export default About;
