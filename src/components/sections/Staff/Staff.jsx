import { React, useMemo, forwardRef, useState } from 'react';
import Style from './staff.module.scss';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useHasIntersected, SectionHeader, ButtonSquare } from 'components';
import { useMantineTheme, rem } from '@mantine/core';
import { staffInfo } from 'content';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { IoMdCloseCircle } from 'react-icons/io';

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
	const [staff, staffIntersected] = useHasIntersected({ threshold: 0.25 });

	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

	const slides = useMemo(() => {
		return staffInfo.map((item, index) => (
			<Carousel.Slide key={index}>
				<Card {...item} />
			</Carousel.Slide>
		));
	}, []);

	return (
		<div className={Style.Staff} ref={ref}>
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
						<div className={Style.Button}>
							<ButtonSquare text='View All' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Staff;
