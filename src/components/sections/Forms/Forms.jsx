import { React, forwardRef } from 'react';
import Style from './forms.module.scss';
import { useHasIntersected, SectionHeader } from 'components';
import { patientForms } from 'content';
// import { Modal } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
// import { IntakeForm } from './IntakeForm.tsx';

const Forms = forwardRef((props, ref) => {
	const [forms, formsIntersected] = useHasIntersected({ threshold: 0.25 });
	// const [formSelected, setFormSelected] = useState(-1);
	// const [opened, { open, close }] = useDisclosure(false);

	// const formModal = useMemo(() => {
	// 	return <IntakeForm />;
	// }, []);

	return (
		<div className={Style.Forms} ref={ref}>
			<div className={Style.InnerWrapper}>
				<div className={Style.AboutSubSection} ref={forms}>
					<SectionHeader top='Patient Forms' />
					<div className={Style[`Content${formsIntersected ? 'Show' : ''}`]}>
						{patientForms.map((form, index) => (
							<div key={index} className={Style.Form}>
								<div className={Style.FormLabel}>
									<h3>{form.name}</h3>
								</div>
								<img
									src='https://jd-health-and-wellness.s3.us-west-2.amazonaws.com/form.png'
									alt='form'
									className={Style.FormImage}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
});

export default Forms;
