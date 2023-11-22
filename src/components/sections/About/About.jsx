import { React, useEffect, useRef } from 'react';
import Style from './about.module.scss';
import { SectionHeader, useHasIntersected } from 'components';

export default function About() {
	const [aboutText, aboutTextIntersected] = useHasIntersected({ threshold: 0.25 });
	const [CTA, CTAIntersected] = useHasIntersected({ threshold: 0.25 });

	const service1name = useRef();

	useEffect(() => {
		// console.dir(service1name.current);
		console.log(service1name.current.clientWidth);

		const handleScroll = (event) => {
			const windowHeight = window.innerHeight;
			const currentScroll = window.pageYOffset;
			console.log(windowHeight, currentScroll);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={Style.About}>
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
				</div>
			</div>
			<div className={Style.Services}>
				<div className={Style.Service}>
					<div className={Style.ServName} ref={service1name}>
						<img
							src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1697654802/JD/icons8-family-96_vuffga.png'
							alt='family medicine icon'
							className={Style.Icon}
						/>
						<div className={Style.Text}>Family Medicine</div>
					</div>
					<div className={Style.ServDescription}></div>
				</div>
				<div className={Style.Service}>
					<div className={Style.ServName}>
						<div className={Style.Icon}></div>
						<div className={Style.Text}></div>
					</div>
					<div className={Style.ServDescription}></div>
				</div>
				<div className={Style.Service}>
					<div className={Style.ServName}>
						<div className={Style.Icon}></div>
						<div className={Style.Text}></div>
					</div>
					<div className={Style.ServDescription}></div>
				</div>
				<div className={Style.Service}>
					<div className={Style.ServName}>
						<div className={Style.Icon}></div>
						<div className={Style.Text}></div>
					</div>
					<div className={Style.ServDescription}></div>
				</div>
				<div className={Style.Service}>
					<div className={Style.ServName}>
						<div className={Style.Icon}></div>
						<div className={Style.Text}></div>
					</div>
					<div className={Style.ServDescription}></div>
				</div>
				<div className={Style.Service}>
					<div className={Style.ServName}>
						<div className={Style.Icon}></div>
						<div className={Style.Text}></div>
					</div>
					<div className={Style.ServDescription}></div>
				</div>
			</div>
			<div className={CTAIntersected ? Style.CTAShow : Style.CTA} ref={CTA}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<h1>Schedule an appointment today!</h1>
					<h2>Call (503) 877-1995</h2>
				</div>
			</div>
		</div>
	);
}
