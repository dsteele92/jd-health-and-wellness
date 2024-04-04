import { React, useState, forwardRef, useMemo } from 'react';
import Style from './forms.module.scss';
import { useHasIntersected, SectionHeader, ButtonRoundInverse, ButtonRound } from 'components';
import { patientForms } from 'content';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IntakeForm } from './IntakeForm.tsx';

const Forms = forwardRef((props, ref) => {
	const [forms, formsIntersected] = useHasIntersected();
	const [formSelected, setFormSelected] = useState(-1);
	const [opened, { open, close }] = useDisclosure(false);

	const formModal = useMemo(() => {
		return <IntakeForm />;
	}, []);

	return (
		<div className={Style.Forms} ref={ref}>
			<div className={Style.InnerWrapper}>
				<div className={Style.AboutSubSection} ref={forms}>
					<SectionHeader top='Patient' bottom='Forms' width='20rem' />
					<div className={Style[`Content${formsIntersected ? 'Show' : ''}`]}>
						<ul className={Style.Form}>
							{patientForms.map((form, index) => (
								<li key={index}>
									<h3>{form.name}</h3>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Forms;
