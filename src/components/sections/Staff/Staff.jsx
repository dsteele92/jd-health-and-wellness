import { React, useMemo, forwardRef, useState } from 'react';
import Style from './staff.module.scss';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useHasIntersected, SectionHeader, ButtonSquare } from 'components';
import { useMantineTheme, rem } from '@mantine/core';
import { staffInfo } from 'content';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { IoMdCloseCircle } from 'react-icons/io';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Card({ name, title, url, info }) {
	const [showBio, setShowBio] = useState(false);

	return (
		<div className={Style.CardOuter}>
			<div className={Style.CardInner}>
				{title && (
					<div className={Style.Circle}>
						<p className={Style.Caption}>{title}</p>
					</div>
				)}
				<div className={Style.Card}>
					<div className={Style.CardContent} onClick={() => setShowBio(true)}>
						<h3 className={Style.Header}>{name}</h3>
						<div style={{ backgroundImage: `url(${url})` }} className={Style.CardImage}></div>
						<div className={Style.ShowBio}>
							<FaCircleArrowRight />
							<p>Show Bio</p>
						</div>
						<div className={Style.ShowBioMobile}>
							<p>Tap to View Bio</p>
						</div>
					</div>
					<div
						className={Style[`CardText${showBio ? 'Show' : ''}`]}
						style={{ pointerEvents: showBio ? 'auto' : 'none' }}>
						<div className={Style.Close} onClick={() => setShowBio(false)}>
							<IoMdCloseCircle />
						</div>
						<p>{info}</p>
					</div>
					<img
						src='https://jd-health-and-wellness.s3.us-west-2.amazonaws.com/pine_tree_horizon_teal.png'
						alt='pine tree background'
						className={Style.CardBg}
					/>
				</div>
			</div>
		</div>
	);
}

const Staff = forwardRef((props, ref) => {
	const [opened, { open, close }] = useDisclosure(false);

	const [staff, staffIntersected] = useHasIntersected({ threshold: 0.25 });
	const [selected, setSelected] = useState(0);

	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

	const slides = useMemo(() => {
		return staffInfo.map((item, index) => (
			<Carousel.Slide key={index}>
				<Card {...item} />
			</Carousel.Slide>
		));
	}, []);

	const viewAllModal = useMemo(() => {
		return (
			<div className={Style.ModalContent}>
				<div className={Style.ModalHeader}>
					<div className={Style.ModalClose} onClick={close}>
						<IoMdCloseCircle />
					</div>
					<h2 className={Style.ModalTitle}>A compassionate team that hears you</h2>
					<div className={Style.MemberText}>
						<h3>{staffInfo[selected].name}</h3>
						<p>{staffInfo[selected].info}</p>
					</div>
				</div>
				<h4 className={Style.Instructions}>Click on member of our staff to read their bio</h4>
				<div className={Style.Members}>
					{staffInfo.map((item, index) => (
						<div
							key={index}
							className={Style[`Member${selected === index ? 'Selected' : ''}`]}
							onClick={() => setSelected(index)}>
							<div style={{ backgroundImage: `url(${item.url})` }} className={Style.MemberImage}></div>
							<div className={Style.MemberInfo}>
								<h3 className={Style.MemberName}>{item.name}</h3>
								{item.title && <h4 className={Style.MemberTitle}>{item.title}</h4>}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}, [selected, close]);

	return (
		<div className={Style.Staff} ref={ref}>
			<Modal
				opened={opened}
				onClose={close}
				size='100%'
				classNames={{ body: Style.ViewAllModal }}
				withCloseButton={false}>
				{viewAllModal}
			</Modal>
			<div className={Style.InnerWrapper}>
				<div className={Style.AboutSubSection} ref={staff}>
					<SectionHeader top='Meet the Team' />
					<div className={Style[`Content${staffIntersected ? 'Show' : ''}`]}>
						<div className={Style.Carousel}>
							<Carousel
								slideSize={{ base: mobile ? '100%' : '30%' }}
								slideGap={{ base: mobile ? rem(10) : rem(25) }}
								align='start'
								slidesToScroll={{ base: mobile ? 1 : 3 }}>
								{slides}
							</Carousel>
						</div>
						<div className={Style.Button} onClick={open}>
							<ButtonSquare text='View All' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Staff;
