import { React, useEffect, useRef } from 'react';
import Style from './staff.module.scss';
import { useHasIntersected } from 'components';

export default function Staff() {
	const [staff, staffIntersected] = useHasIntersected({ threshold: 0.25 });

	const smText = useRef();
	const lgText = useRef();

	useEffect(() => {
		const handleScroll = (event) => {
			// const windowHeight = window.innerHeight;
			const currentScroll = window.pageYOffset;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={staffIntersected ? Style.StaffShow : Style.Staff} ref={staff}>
			<div className={Style.Bubble}>
				<div className={Style.BubbleInner}></div>
			</div>
			<div className={Style.Content}>
				<div></div>
				<div className={Style.TextDisplay}>
					<div className={Style.MovingTextSm} ref={smText}>
						<h1>
							Hover over photos to read more · Hover over photos to read more · Hover over photos to read
							more · Hover over photos to read more · Hover over photos to read more · Hover over photos
							to read more · Hover over photos to read more ·{' '}
						</h1>
					</div>
					<div className={Style.MovingTextLg}>
						<div className={Style.LargeText} ref={lgText}>
							Meet the team · Meet the team · Meet the team · Meet the team · Meet the team · Meet the
							team · Meet the team · Meet the team ·{' '}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
