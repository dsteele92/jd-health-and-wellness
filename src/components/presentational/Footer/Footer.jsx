import { React, useRef } from 'react';
import Style from './footer.module.scss';
import { useHasIntersected } from 'components';

export default function Footer() {
	const [footer, footerIntersected] = useHasIntersected({ threshold: 0.25 });

	return (
		<div className={footerIntersected ? Style.FooterShow : Style.Footer} ref={footer}>
			<div className={Style.Bubble}>
				<div className={Style.BubbleInner}></div>
			</div>
			<div className={Style.Content}></div>
		</div>
	);
}
