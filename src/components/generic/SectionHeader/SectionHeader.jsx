import { React } from 'react';
import Style from './sectionHeader.module.scss';

export default function SectionHeader(props) {
	return (
		<div className={Style.Header}>
			<div className={Style[props.section]}>{props.text}</div>
		</div>
	);
}
