import { React, useState, forwardRef, useMemo } from 'react';
import Style from './forms.module.scss';
import { useHasIntersected, SectionHeader, ButtonRoundInverse } from 'components';
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
		<div ref={ref}>
			<div className={formsIntersected ? Style.FormsShow : Style.Forms} ref={forms}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<Modal
						opened={opened}
						onClose={close}
						fullScreen
						radius={0}
						transitionProps={{ transition: 'fade', duration: 200 }}>
						{formModal}
					</Modal>
					<SectionHeader text='Patient Forms' />
					<div className={Style.FormsContainer}>
						{patientForms.map((form, index) => (
							<div
								className={formsIntersected ? Style.FormShow : Style.Form}
								key={index}
								onMouseEnter={() => setFormSelected(index)}
								onMouseLeave={() => setFormSelected(-1)}
								onClick={open}>
								<div className={Style.FormBubble}>
									<div className={Style.FormBubbleInner}>
										<div className={Style.Top}></div>
										<div className={Style.Bottom}></div>
									</div>
								</div>
								<div className={Style.FormContent}>
									<div className={Style.FormWrapper}>
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
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
});

export default Forms;
