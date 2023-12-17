import { React, useState } from 'react';
import Style from './forms.module.scss';
import { useHasIntersected, SectionHeader, ButtonRoundInverse } from 'components';
import { patientForms } from 'content';

export default function Forms() {
	const [forms, formsIntersected] = useHasIntersected({ threshold: 0.25 });
	const [formSelected, setFormSelected] = useState(-1);

	return (
		<div>
			<SectionHeader text='PATIENT FORMS' section='Forms' />
			<div className={formsIntersected ? Style.FormsShow : Style.Forms} ref={forms}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					{patientForms.map((form, index) => (
						<div
							className={Style.Form}
							key={index}
							onMouseEnter={() => setFormSelected(index)}
							onMouseLeave={() => setFormSelected(-1)}>
							<div className={Style.FormTitle}>
								<h3>{form.name}</h3>
							</div>
							<div className={Style.Button}>
								<ButtonRoundInverse
									size='small'
									direction='down'
									active={formSelected === index ? true : false}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
