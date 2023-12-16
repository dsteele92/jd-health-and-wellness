import { React } from 'react';
import Style from './buttonRound.module.scss';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export default function ButtonRound({
	direction = 'right',
	disabled = false,
	onClick,
	size = 'large',
	active = false,
}) {
	let transform = 'rotate(0deg) translate(3px, -5px)';

	if (direction === 'left') {
		transform = 'rotateY(180deg) translate(3px, -5px)';
	} else if (direction === 'up') {
		transform = 'rotateZ(-90deg) translate(2px, -4px)';
	} else if (direction === 'down') {
		transform = 'rotateZ(90deg) translate(2px, -4px)';
	}

	return (
		<div
			className={`${Style.Button} ${Style[size]} ${disabled ? Style.Disabled : ''} ${active ? Style.Active : ''}`}
			onClick={onClick}>
			<div className={Style.Arrow} style={{ transform: transform }}>
				>
			</div>
		</div>
	);
}
