import { React, useState, forwardRef, useMemo } from 'react';
import Style from './reviews.module.scss';
import { useHasIntersected, ButtonRound, SectionHeader } from 'components';
import { reviewsData } from 'content';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, rem } from '@mantine/core';

function Card({ name, review }) {
	return (
		<div className={Style.Card}>
			<div className={Style.Header}>
				<h3>{name}</h3>
			</div>
			<div className={Style.Review}>
				<p>{review}</p>
			</div>
		</div>
	);
}

const Reviews = forwardRef((props, ref) => {
	const [reviews, reviewsIntersected] = useHasIntersected();

	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const slides = useMemo(() => {
		return reviewsData.map((item, index) => (
			<Carousel.Slide key={index}>
				<Card {...item} />
			</Carousel.Slide>
		));
	}, []);

	return (
		<div ref={ref}>
			{/* <SectionHeader text='REVIEWS' section='Reviews' /> */}
			<div className={reviewsIntersected ? Style.ReviewsShow : Style.Reviews} ref={reviews}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.SectionHeader}>
						<h3>Reviews</h3>
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
		</div>
	);
});

export default Reviews;
