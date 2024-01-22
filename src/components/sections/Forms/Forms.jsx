import { React, useState, forwardRef } from 'react';
import Style from './forms.module.scss';
import { useHasIntersected, SectionHeader, ButtonRoundInverse } from 'components';
import { patientForms } from 'content';

const Forms = forwardRef((props, ref) => {
	const [forms, formsIntersected] = useHasIntersected({ threshold: 0.25 });
	const [formSelected, setFormSelected] = useState(-1);

	return (
		<div ref={ref}>
			<SectionHeader text='PATIENT FORMS' section='Forms' />
			<div className={Style.Forms} ref={forms}>
				{patientForms.map((form, index) => (
					<div
						className={formsIntersected ? Style.FormShow : Style.Form}
						key={index}
						onMouseEnter={() => setFormSelected(index)}
						onMouseLeave={() => setFormSelected(-1)}>
						<div className={Style.Bubble}>
							<div className={Style.BubbleInner}>
								<div className={Style.Top}></div>
								<div className={Style.Bottom}></div>
							</div>
						</div>
						<div className={Style.Content}>
							{form.spanish ? (
								<div className={Style.FormWrapper}>
									<div className={Style.FormTitle}>
										<h3>{form.name}</h3>
										<div className={Style.SelectLanguage}>
											<a
												href={form.link}
												target='_blank'
												rel='noopener noreferrer'
												className={Style.Language}>
												<h4>English</h4>
											</a>
											<a
												href={form.spanish}
												target='_blank'
												rel='noopener noreferrer'
												className={Style.Language}>
												<h4>Spanish</h4>
											</a>
										</div>
									</div>
									<div className={Style.Button}>
										<ButtonRoundInverse
											size='small'
											direction='down'
											active={formSelected === index ? true : false}
											section='Forms'
										/>
									</div>
								</div>
							) : (
								<a href={form.link} target='_blank' rel='noopener noreferrer'>
									<div className={Style.FormTitle}>
										<h3>{form.name}</h3>
									</div>
									<div className={Style.Button}>
										<ButtonRoundInverse
											size='small'
											direction='down'
											active={formSelected === index ? true : false}
											section='Forms'
										/>
									</div>
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
});

export default Forms;
