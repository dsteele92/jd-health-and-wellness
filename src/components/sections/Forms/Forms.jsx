import { React, forwardRef, useState, useMemo } from 'react';
import Style from './forms.module.scss';
import { useHasIntersected, SectionHeader } from 'components';
import { patientForms } from 'content';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IntakeForm } from './IntakeForm.tsx';
import { IoMdCloseCircle } from 'react-icons/io';

const Forms = forwardRef((props, ref) => {
	const [forms, formsIntersected] = useHasIntersected({ threshold: 0.25 });
	const [formSelected, setFormSelected] = useState(0);
	const [opened, { open, close }] = useDisclosure(false);

	const formModal = useMemo(() => {
		if (formSelected === 0)
			return (
				<div className={Style.ModalContent}>
					<div className={Style.ModalHeader}>
						<div className={Style.ModalClose} onClick={close}>
							<IoMdCloseCircle />
						</div>
						<h2 className={Style.ModalTitle}>{patientForms[formSelected].name}</h2>
					</div>
					<IntakeForm />
				</div>
			);
		return (
			<div className={Style.ModalContent}>
				<div className={Style.ModalHeader}>
					<div className={Style.ModalClose} onClick={close}>
						<IoMdCloseCircle />
					</div>
					<h2 className={Style.ModalTitle}>{patientForms[formSelected].name}</h2>
				</div>
				<iframe
					title={patientForms[formSelected].name}
					src={patientForms[formSelected].link}
					width='100%'
					height='800px'
				/>
				{patientForms[formSelected].spanish && (
					<iframe
						title={patientForms[formSelected].name}
						src={patientForms[formSelected].spanish}
						width='100%'
						height='800px'
					/>
				)}
			</div>
		);
	}, [formSelected, close]);

	return (
		<div className={Style.Forms} ref={ref}>
			<Modal
				opened={opened}
				onClose={close}
				size='100%'
				classNames={{ body: Style.Modal }}
				withCloseButton={false}>
				>{formModal}
			</Modal>
			<div className={Style.InnerWrapper}>
				<div className={Style.AboutSubSection} ref={forms}>
					<SectionHeader top='Patient Forms' />
					<div className={Style[`Content${formsIntersected ? 'Show' : ''}`]}>
						{patientForms.map((form, index) => (
							<div
								key={index}
								className={Style.Form}
								onClick={() => {
									open();
									setFormSelected(index);
								}}>
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
