import { React } from 'react';
import Style from './about.module.scss';
import { SectionHeader, useHasIntersected } from 'components';

export default function About() {
	const [aboutText, aboutTextIntersected] = useHasIntersected({ threshold: 0.25 });

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
					<div className={Style.ServiceName}>
						<img
							src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1697654802/JD/icons8-family-96_vuffga.png'
							alt='family medicine icon'
							className={Style.Icon}
						/>
						<div className={Style.Text}>Family Medicine</div>
					</div>
					<div className={Style.ServiceDescription}></div>
				</div>
				<div className={Style.Service}>
					<div className={Style.ServiceName}>
						<div className={Style.Icon}></div>
						<div className={Style.Text}></div>
					</div>
					<div className={Style.ServiceDescription}></div>
				</div>
				<div className={Style.Service}>
					<div className={Style.ServiceName}>
						<div className={Style.Icon}></div>
						<div className={Style.Text}></div>
					</div>
					<div className={Style.ServiceDescription}></div>
				</div>
				<div className={Style.Service}>
					<div className={Style.ServiceName}>
						<div className={Style.Icon}></div>
						<div className={Style.Text}></div>
					</div>
					<div className={Style.ServiceDescription}></div>
				</div>
				<div className={Style.Service}>
					<div className={Style.ServiceName}>
						<div className={Style.Icon}></div>
						<div className={Style.Text}></div>
					</div>
					<div className={Style.ServiceDescription}></div>
				</div>
				<div className={Style.Service}>
					<div className={Style.ServiceName}>
						<div className={Style.Icon}></div>
						<div className={Style.Text}></div>
					</div>
					<div className={Style.ServiceDescription}></div>
				</div>
			</div>
		</div>
	);
}
