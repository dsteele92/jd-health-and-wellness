import { React, useState } from 'react';
import Style from './reviews.module.scss';
import { useHasIntersected, ButtonRound, SectionHeader } from 'components';
import { reviewsData } from 'content';

export default function Reviews() {
	const [carouselIndex, setCarouselIndex] = useState(0);

	const [reviews, reviewsIntersected] = useHasIntersected({ threshold: 0.25 });

	const handleArrow = (delta) => {
		if (carouselIndex + delta < 0) {
			setCarouselIndex(0);
		} else if (carouselIndex + delta > reviewsData.length - 2) {
			setCarouselIndex(reviewsData.length - 2);
		} else {
			setCarouselIndex(carouselIndex + delta);
		}
	};

	return (
		<div>
			<SectionHeader text='REVIEWS' section='Reviews' />
			<div className={reviewsIntersected ? Style.ReviewsShow : Style.Reviews} ref={reviews}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.Carousel}>
						<ButtonRound
							onClick={() => handleArrow(-2)}
							direction='left'
							size='medium'
							disabled={carouselIndex === 0 ? true : false}
						/>
						<div className={Style.CarouselFrameOuter}>
							<div
								className={Style.CarouselFrameInner}
								style={{ transform: `translateX(-${carouselIndex * 50}%)` }}>
								<div className={Style.Review} style={{ width: `${reviewsData.length * 50}%` }}>
									{reviewsData.map((rev, index) => (
										<div className={Style.Rev} key={index}>
											<h3>{rev.name}</h3>
											<p>{rev.review}</p>
										</div>
									))}
								</div>
							</div>
						</div>
						<ButtonRound
							onClick={() => handleArrow(2)}
							disabled={carouselIndex === reviewsData.length - 2 ? true : false}
							size='medium'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
