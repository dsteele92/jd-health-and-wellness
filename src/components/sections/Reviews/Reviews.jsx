import { React, forwardRef, useMemo } from 'react';
import Style from './reviews.module.scss';
import { useHasIntersected } from 'components';
import { reviewsData } from 'content';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, rem } from '@mantine/core';

function Card({ name, review }) {
	return (
		<div className={Style.CardOuter}>
			<div className={Style.CardInner}>
				<div className={Style.Circle}>
					<p className={Style.Caption}>{name}</p>
				</div>
				<div className={Style.Card}>
					<div className={Style.CardText}>
						<img
							src='https://jd-health-and-wellness.s3.us-west-2.amazonaws.com/five+stars.svg'
							alt='five stars'
							style={{ width: '100px', height: '20px' }}
						/>
						<p>{review}</p>
					</div>
					{/* <img
						src='https://jd-health-and-wellness.s3.us-west-2.amazonaws.com/pine_tree_card_bg.png'
						alt='pine tree background'
						className={Style.CardBg}
					/> */}
				</div>
			</div>
		</div>
	);
}

const Reviews = forwardRef((props, ref) => {
	const [reviews, reviewsIntersected] = useHasIntersected({ threshold: 0.5 });

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
			<div className={Style.InnerWrapper}>
				<div className={Style.AboutSubSection} ref={reviews}>
					{/* <SectionHeader top='Reviews' /> */}
					<h1>Healthcare that hears you</h1>
					<div className={Style[`Content${reviewsIntersected ? 'Show' : ''}`]}>
						<div className={Style.Carousel}>
							<Carousel
								slideSize={{ base: mobile ? '100%' : '30%' }}
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

export default Reviews;
