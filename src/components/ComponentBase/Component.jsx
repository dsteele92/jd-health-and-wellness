import { React, useRef } from 'react';
import Style from './component.module.scss';
import { useHasIntersected } from 'components';

export default function Component() {
	const [component, componentIntersected] = useHasIntersected();

	return (
		<div className={componentIntersected ? Style.ComponentShow : Style.Component} ref={component}>
			<div className={Style.Bubble}>
				<div className={Style.BubbleInner}></div>
			</div>
			<div className={Style.Content}></div>
		</div>
	);
}
