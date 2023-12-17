import { React, useRef } from 'react';
import Style from './contact.module.scss';
import { useHasIntersected, SectionHeader } from 'components';

export default function Contact() {
	const [contact, contactIntersected] = useHasIntersected({ threshold: 0.25 });

	return (
		<div>
			<SectionHeader text='CONTACT US' section='Contact' />
			<div className={contactIntersected ? Style.ContactShow : Style.Contact} ref={contact}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}></div>
			</div>
		</div>
	);
}
