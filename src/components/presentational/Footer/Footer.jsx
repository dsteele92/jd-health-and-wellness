import { React } from 'react';
import Style from './footer.module.scss';
import { useHasIntersected } from 'components';

export default function Footer() {
	const [footer, footerIntersected] = useHasIntersected();

	return (
		<div className={footerIntersected ? Style.FooterShow : Style.Footer} ref={footer}>
			<div className={Style.Bubble}>
				<div className={Style.BubbleInner}></div>
			</div>
			<div className={Style.Content}>
				<h3>JD Health & Wellness Center © All Rights Reserved.</h3>
			</div>
		</div>
	);
}
