import { React, forwardRef, useMemo, useState } from 'react';
import Style from './community.module.scss';
import { useHasIntersected, SectionHeader } from 'components';
import { communityLinks } from 'content';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IoMdCloseCircle } from 'react-icons/io';

const Community = forwardRef((props, ref) => {
	const [opened, { open, close }] = useDisclosure(false);
	const [community, communityIntersected] = useHasIntersected({ threshold: 0.25 });
	const [selected, setSelected] = useState(0);

	const modal = useMemo(() => {
		return (
			<div className={Style.ModalContent}>
				<div className={Style.ModalHeader}>
					<div className={Style.ModalClose} onClick={close}>
						<IoMdCloseCircle />
					</div>
					<h2 className={Style.ModalTitle}>{communityLinks[selected].name}</h2>
				</div>
				{communityLinks[selected].links.map((link, index) => (
					<iframe key={index} title='PDF Viewer' src={link} width='100%' height='800px' />
				))}
				{communityLinks[selected].image && (
					<img
						src={communityLinks[selected].image}
						alt={communityLinks[selected].altText}
						className={Style.ModalImage}
					/>
				)}
			</div>
		);
	}, [selected, close]);

	return (
		<div className={Style.Community} ref={ref}>
			<Modal
				opened={opened}
				onClose={close}
				size='100%'
				classNames={{ body: Style.Modal }}
				withCloseButton={false}>
				{modal}
			</Modal>
			<div className={Style.Tint}></div>
			<div className={Style.InnerWrapper}>
				<section className={Style.Stripe}>
					<SectionHeader top='Community' />
					<div className={Style.StripeContent}>
						<p>
							We named the Clinic JD after the children of Both Felicity and Eric Davis Josiah, Jazmyn,
							and Lastly Joshua. The name JD was inspired by Joshua Davis the youngest grandchild of Dr.
							Oscar and Lerma Quijano. Joshua is a book in the bible and was a leader charged with leading
							his people after his servant Moses had passed on. Joshua was the next leader to lead the
							Israelites who had been traveling in the wilderness for thirty years getting the same
							results. Joshua was given a special charge as he was told in Joshua 1:7. Be strong and very
							courageous… "Do not be afraid; do not be discouraged, for the Lord your God will be with you
							wherever you go.” This commandment was given to him prior to entering a new world. We are
							entering a new health model care and we will be here for you and the community as we
							transition into this new system of care.
						</p>
					</div>
				</section>
				<div className={Style.Right} ref={community}>
					<div className={Style[`RightContent${communityIntersected ? 'Show' : ''}`]}>
						{communityLinks.map((article, index) => (
							<div
								key={index}
								className={Style[`Article${index}`]}
								onClick={() => {
									open();
									setSelected(index);
								}}>
								<h1 className={Style.Number}>{`0${index + 1}`}</h1>
								<h3 className={Style.Name}>{article.name}</h3>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
});

export default Community;
