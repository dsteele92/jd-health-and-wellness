import { React } from 'react';
import Style from './sectionHeader.module.scss';

export default function SectionHeader(props) {
	return (
		<div className={Style.HeaderWrapper}>
			<h1 className={Style.Header1}>{props.top}</h1>
			{props.middle && <h1 className={Style.Header2}>{props.middle}</h1>}
			<h1 className={Style.Header3}>{props.bottom}</h1>
		</div>
	);
}
