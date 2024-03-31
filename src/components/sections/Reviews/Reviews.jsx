import { React, forwardRef, useMemo } from 'react';
import Style from './reviews.module.scss';
import { useHasIntersected, SectionHeader } from 'components';
import { reviewsData } from 'content';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, rem, Group, Stack } from '@mantine/core';

// function Card({ name, review }) {
// 	return (
// 		<div className={Style.Card}>
// 			<div className={Style.Header}>
// 				<h3>{name}</h3>
// 			</div>
// 			<div className={Style.Review}>
// 				<p>{review}</p>
// 			</div>
// 		</div>
// 	);
// }

function Card({ name, review }) {
	return (
		<div className={Style.CardOuter}>
			<div className={Style.CardInner}>
				<div className={Style.Circle}>
					<p className={Style.Caption}>{name}</p>
				</div>
				<div className={Style.Card}>
					<div className={Style.CardText}>
						<p>{review}</p>
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
		<div className={Style.Reviews} ref={ref}>
			<Stack className={Style.InnerWrapper}>
				<Group justify='space-between' className={Style.AboutSubSection} ref={reviews}>
					<SectionHeader top='Reviews' />
					<div className={Style.Content}>
						<div className={Style.Carousel}>
							<Carousel
								slideSize={{ base: mobile ? '100%' : '50%' }}
								slideGap={{ base: mobile ? rem(10) : rem(25) }}
								align='start'
								slidesToScroll={2}>
								{slides}
							</Carousel>
						</div>
					</div>
				</Group>
			</Stack>
		</div>
	);
});

export default Reviews;
