import { React, useMemo, useEffect, useRef } from 'react';
import Style from './staff.module.scss';
import { Carousel } from '@mantine/carousel';
import { useHasIntersected, useScroll } from 'components';
import { Paper, Text, Title, Button, rem } from '@mantine/core';
import { staffInfo } from 'content';
import classes from './CardsCarousel.module.css';

// function Card({ image, title, category }) {
// 	return (
// 		<Paper shadow='md' p='xl' radius='md' style={{ backgroundImage: `url(${image})` }} className={classes.card}>
// 			<div>
// 				<Text className={classes.category} size='xs'>
// 					{category}
// 				</Text>
// 				<Title order={3} className={classes.title}>
// 					{title}
// 				</Title>
// 			</div>
// 			<Button variant='white' color='dark'>
// 				Read article
// 			</Button>
// 		</Paper>
// 	);
// }
function Card({ name, title, url, info }) {
	return (
		<Paper
			shadow='md'
			p='xl'
			radius='md'
			style={{ backgroundImage: `url(${url})` }}
			className={classes.card}></Paper>
	);
}

const data = [
	{
		image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Best forests to visit in North America',
		category: 'nature',
	},
	{
		image: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Hawaii beaches review: better than you think',
		category: 'beach',
	},
	{
		image: 'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Mountains at night: 12 best locations to enjoy the view',
		category: 'nature',
	},
	{
		image: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Aurora in Norway: when to visit for best experience',
		category: 'nature',
	},
	{
		image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Best places to visit this winter',
		category: 'tourism',
	},
	{
		image: 'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Active volcanos reviews: travel at your own risk',
		category: 'nature',
	},
];

export default function Staff() {
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
					<Carousel slideSize='25%' slideGap={{ base: rem(2), sm: 'xl' }} align='start' slidesToScroll={4}>
						{slides}
					</Carousel>
				</div>
			</div>
		</div>
	);
}
