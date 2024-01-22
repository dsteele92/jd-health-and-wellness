import { React, useState, forwardRef } from 'react';
import Style from './formsMobile.module.scss';
import { useHasIntersected, SectionHeader, ButtonRound } from 'components';
import { patientForms } from 'content';

const FormsMobile = forwardRef((props, ref) => {
	const [forms, formsIntersected] = useHasIntersected({ threshold: 0.25 });
	const [formSelected, setFormSelected] = useState(-1);

	return (
		<div ref={ref}>
			<SectionHeader text='PATIENT FORMS' section='Forms' />
			<div className={formsIntersected ? Style.FormsMobileShow : Style.FormsMobile} ref={forms}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.Forms} onMouseLeave={() => setFormSelected(-1)}>
						{patientForms.map((item, index) => (
							<a href={item.link} target='_blank' rel='noopener noreferrer'>
								<div className={Style.Link} key={index} onMouseEnter={() => setFormSelected(index)}>
									<h3 className={Style.Article}>{item.name}</h3>
									<ButtonRound size='small' active={formSelected === index ? true : false} />
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
});

export default FormsMobile;
