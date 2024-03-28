import { React, useEffect, useRef, forwardRef } from 'react';
import Style from './about.module.scss';
import { SectionHeader, useHasIntersected, useScroll } from 'components';
import { PiArrowBendRightDownThin } from 'react-icons/pi';

const About = forwardRef((props, ref) => {
	const [whoWeAre, whoWeAreIntersected] = useHasIntersected({ threshold: 0.5 });
	const [video, videoIntersected] = useHasIntersected({ threshold: 0.3 });
	// const [CTA, CTAIntersected] = useHasIntersected();
	// const [video, videoIntersected] = useHasIntersected();
	// const [community, communityIntersected] = useHasIntersected();
	// const [communityLinkSelected, setCommunityLinkSelected] = useState(-1);

	const circleText = useRef();
	const { scrollY } = useScroll();

	useEffect(() => {
		const delta = (scrollY / 10) % 360;
		circleText.current.style.transform = `rotateZ(${delta % 360}deg)`;
	}, [scrollY]);

	return (
		<div className={Style.AboutSection} ref={ref}>
			<div className={Style.InnerWrapper}>
				{/* <SectionHeader text='Who We Are' /> */}
				<div className={Style.HeaderWrapper}>
					<h1 className={Style.Header1}>Who</h1>
					<h1 className={Style.Header2}>We</h1>
					<h1 className={Style.Header3}>Are</h1>
				</div>
				<h3 className={Style.WhoWeAre} ref={whoWeAre}>
					JD Health & Wellness Center has been serving patients in the Salem, Oregon area for over 30 years in
					a variety of health and wellness services from primary care to mental health and addiction.
					Regardless of what kind of pain you are experiencing we believe in all methods from traditional to
					alternative medicine. We believe in treating the whole person not just their symptoms, we see the
					body as an interconnected system working to strengthen both body and mind to improve one’s complete
					health.
				</h3>
				{/* <SectionHeader text='Our Story' /> */}
				<div className={Style.HeaderWrapper}>
					<h1 className={Style.Header1}>Our</h1>
					<h1 className={Style.Header3}>Story</h1>
				</div>
				<div className={Style.Story} ref={video}>
					<div className={Style[`VideoContainer${videoIntersected ? 'Show' : ''}`]}>
						<video controls>
							<source
								src='https://jd-health-and-wellness.s3.us-west-2.amazonaws.com/JDHW_Better-Together-2.mp4'
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
				{/* {windowWidth >= 768 ? <Services /> : <ServicesMobile />} */}
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
				{/* <Staff /> */}
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
			<svg width='2000' height='200'>
				<path
					d='M0,100 Q50,80 100,100 Q150,120 200,100 Q250,80 300,100 Q350,120 400,100 Q450,80 500,100 Q550,120 600,100 L600,200 L0,200 Z
           M600,100 Q650,80 700,100 Q750,120 800,100 Q850,80 900,100 Q950,120 1000,100 Q1050,80 1100,100 Q1150,120 1200,100 L1200,200 L600,200 Z
           M1200,100 Q1250,80 1300,100 Q1350,120 1400,100 Q1450,80 1500,100 Q1550,120 1600,100 Q1650,80 1700,100 Q1750,120 1800,100 L1800,200 L1200,200 Z'
					fill='none'
					stroke='green'
					stroke-width='2'
				/>
			</svg>
		</div>
	);
});

export default About;
