import { React } from 'react';
import Style from './sectionHeader.module.scss';
import { useHasIntersected } from 'components';

export default function SectionHeader(props) {
	const [header, headerIntersected] = useHasIntersected();

	return (
		<div ref={header} className={headerIntersected ? Style.HeaderShow : Style.Header}>
			<div className={Style.Bubble}>
				<div className={Style.BubbleInner}></div>
			</div>
			<main className={Style.SectionHeader}>
				<h3>{props.text}</h3>
			</main>
		</div>
	);
}
