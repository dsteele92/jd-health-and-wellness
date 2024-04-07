import { React } from 'react';
import Style from './buttonSquare.module.scss';

export default function ButtonSquare({ onClick, text, minWidth }) {
	return (
		<div className={Style.Button} onClick={onClick} style={{ minWidth: minWidth || 'fit-content' }}>
			<h3 className={Style.Text}>{text}</h3>
		</div>
	);
}
