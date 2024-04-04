import { React } from 'react';
import Style from './sectionHeader.module.scss';
import { useHasIntersected } from 'components';

export default function SectionHeader(props) {
	const [header, headerIntersected] = useHasIntersected();

	return (
		<div className={Style.HeaderWrapper} ref={header} style={{ width: props.width || '16rem' }}>
			<h1 className={Style[`Header1${headerIntersected ? 'Show' : ''}`]}>{props.top}</h1>
			{props.middle && <h1 className={Style[`Header2${headerIntersected ? 'Show' : ''}`]}>{props.middle}</h1>}
			{props.bottom && <h1 className={Style[`Header3${headerIntersected ? 'Show' : ''}`]}>{props.bottom}</h1>}
		</div>
	);
}
