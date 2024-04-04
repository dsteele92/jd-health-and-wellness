import { React, useMemo, useEffect, useRef, forwardRef } from 'react';
import Style from './staff.module.scss';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useHasIntersected, useScroll, SectionHeader } from 'components';
import { useMantineTheme, rem } from '@mantine/core';
import { staffInfo } from 'content';

function Card({ name, title, url, info }) {
	return (
		<div className={Style.CardOuter}>
			<div className={Style.CardInner}>
				{title && (
					<div className={Style.Circle}>
						<p className={Style.Caption}>{title}</p>
					</div>
				)}
				<div className={Style.Card}>
					<div className={Style.CardContent}>
						<h3 className={Style.Header}>{name}</h3>
						<div style={{ backgroundImage: `url(${url})` }} className={Style.CardImage}></div>
					</div>
					<div className={Style.CardText}>
						<p>{info}</p>
					</div>
					<img
						src='https://jd-health-and-wellness.s3.us-west-2.amazonaws.com/pine_tree_card_bg.png'
						alt='pine tree background'
						className={Style.CardBg}
					/>
				</div>
			</div>
		</div>
	);
}

const Staff = forwardRef((props, ref) => {
	const [staff, staffIntersected] = useHasIntersected({ threshold: 0.3 });

	const smText = useRef();
	const lgText = useRef();

	const { scrollY } = useScroll();

	useEffect(() => {
		const delta = (3 * scrollY) / window.innerHeight;
		const deltaSlow = scrollY / window.innerHeight;
		smText.current.style.transform = `translateX(${deltaSlow % 100}%)`;
		lgText.current.style.transform = `translateX(${-delta % 100}%)`;
	}, [scrollY, staffIntersected]);

	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const slides = useMemo(() => {
		return staffInfo.map((item, index) => (
			<Carousel.Slide key={index}>
				<Card {...item} />
			</Carousel.Slide>
		));
	}, []);

	return (
		<div className={Style.Staff} ref={ref}>
			<div className={Style.TextDisplay}>
				<div className={Style.MovingTextLg}>
					<div className={Style.LargeText} ref={lgText}>
						Our Staff · Our Staff · Our Staff · Our Staff · Our Staff · Our Staff · Our Staff ·{' '}
					</div>
				</div>
				<div className={Style.MovingTextSm}>
					<div className={Style.SmallText} ref={smText}>
						Hover over photos to read more · Hover over photos to read more · Hover over photos to read more
						· Hover over photos to read more · Hover over photos to read more · Hover over photos to read
						more · Hover over photos to read more ·{' '}
					</div>
				</div>
			</div>
			<div className={Style.InnerWrapper}>
				<div className={Style.AboutSubSection} ref={staff}>
					<SectionHeader top='Meet' middle='The' bottom='Team' />
					<div className={Style[`Content${staffIntersected ? 'Show' : ''}`]}>
						<div className={Style.Carousel}>
							<Carousel
								slideSize={{ base: mobile ? '100%' : '33.333%' }}
								slideGap={{ base: mobile ? rem(10) : rem(25) }}
								align='start'
								slidesToScroll={3}>
								{slides}
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Staff;
