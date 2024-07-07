import { React, useState, useMemo } from 'react';
import Style from './footer.module.scss';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IoMdCloseCircle } from 'react-icons/io';
import { PrivacyPractice } from './PrivacyPractice';

export default function Footer() {
	const [opened, { open, close }] = useDisclosure(false);
	const [selected, setSelected] = useState('');

	const modal = useMemo(() => {
		const gswPage = (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
				<img
					src='https://jd-health-and-wellness.s3.us-west-2.amazonaws.com/Contract_Holder-only-StarMark_Color_2020.ai.png'
					alt='gws contract holder'
					style={{ width: '90%' }}
				/>
				<img
					src='https://jd-health-and-wellness.s3.us-west-2.amazonaws.com/J.D._Health_and_Wellness_Center_INC_6-2023.jpg'
					alt='family medicine services overview'
					style={{ width: '90%' }}
				/>
				<img
					src='https://jd-health-and-wellness.s3.us-west-2.amazonaws.com/Erics_director_award.jpg'
					alt='directors award'
					style={{ width: '90%' }}
				/>
			</div>
		);
		return (
			<div className={Style.ModalContent}>
				<div className={Style.ModalHeader}>
					<div className={Style.ModalClose} onClick={close}>
						<IoMdCloseCircle />
					</div>
				</div>
				{selected === 'privacy' ? PrivacyPractice : gswPage}
			</div>
		);
	}, [selected, close]);

	return (
		<div className={Style.Footer}>
			<Modal
				opened={opened}
				onClose={close}
				size='100%'
				classNames={{ body: Style.Modal }}
				withCloseButton={false}>
				{modal}
			</Modal>
			<h3>JD Health & Wellness Center © All Rights Reserved.</h3>
			<div className={Style.Documents}>
				<h3
					onClick={() => {
						open();
						setSelected('privacy');
					}}>
					Privacy Practice
				</h3>
				<h3
					onClick={() => {
						open();
						setSelected('GSA');
					}}>
					GSA
				</h3>
			</div>
		</div>
	);
}
