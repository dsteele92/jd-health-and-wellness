import { React, useMemo, useEffect, useRef, forwardRef } from 'react';
import Style from './staff.module.scss';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useHasIntersected, useScroll, SectionHeader } from 'components';
import { useMantineTheme, rem } from '@mantine/core';
import { staffInfo } from 'content';

function Card({ name, title, url, info }) {
	return (
		<div className={Style.Card}>
			<div className={Style.Header}>
				<h3>{name}</h3>
				{title && <h4>{title}</h4>}
			</div>
			<div style={{ backgroundImage: `url(${url})` }} className={Style.CardImage}>
				<div className={Style.CardText}>
					<p>{info}</p>
				</div>
			</div>
		</div>
	);
}

const Staff = forwardRef((props, ref) => {
	const [staff, staffIntersected] = useHasIntersected();

	const smText = useRef();
	const lgText = useRef();

	const { scrollY } = useScroll();

	useEffect(() => {
		const delta = (3 * scrollY) / window.innerHeight;
		const deltaSlow = scrollY / window.innerHeight;
		if (staffIntersected) {
			smText.current.style.transform = `translateX(${deltaSlow % 100}%)`;
			lgText.current.style.transform = `translateX(${-delta % 100}%)`;
		}
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
		<div className={staffIntersected ? Style.StaffShow : Style.Staff} ref={staff}>
			<div className={Style.Bubble}>
				<div className={Style.BubbleInner}></div>
			</div>
			<div className={Style.Content}>
				<SectionHeader text='Our Staff' />
				<div className={Style.TextDisplay}>
					<div className={Style.MovingTextLg}>
						<div className={Style.LargeText} ref={lgText}>
							Meet the team · Meet the team · Meet the team · Meet the team · Meet the team · Meet the
							team · Meet the team ·{' '}
						</div>
					</div>
					<div className={Style.MovingTextSm}>
						<h1 ref={smText}>
							Hover over photos to read more · Hover over photos to read more · Hover over photos to read
							more · Hover over photos to read more · Hover over photos to read more · Hover over photos
							to read more · Hover over photos to read more ·{' '}
						</h1>
					</div>
				</div>
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
	);
});

export default Staff;
