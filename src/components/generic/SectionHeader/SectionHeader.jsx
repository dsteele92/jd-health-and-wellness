import { React } from 'react';
import Style from './sectionHeader.module.scss';
import { useHasIntersected } from 'components';

export default function SectionHeader(props) {
	const [header, headerIntersected] = useHasIntersected({ threshold: 1 });

	return (
		<div ref={header} className={Style.Header}>
			<div className={headerIntersected ? Style.BubbleShow : Style.Bubble}>
				<div className={Style.BubbleInner}></div>
				<main className={Style[props.section]}>
					<h3>{props.text}</h3>
				</main>
			</div>
		</div>
	);
}
