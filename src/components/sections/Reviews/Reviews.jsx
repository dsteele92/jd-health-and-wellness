import { React, useState, forwardRef } from 'react';
import Style from './reviews.module.scss';
import { useHasIntersected, ButtonRound, SectionHeader } from 'components';
import { reviewsData } from 'content';

const Reviews = forwardRef((props, ref) => {
	const [carouselIndex, setCarouselIndex] = useState(0);

	const [reviews, reviewsIntersected] = useHasIntersected();

	const windowWidth = window.innerWidth;

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
		<div ref={ref}>
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
							size={windowWidth < 992 ? 'small' : 'medium'}
							disabled={carouselIndex === 0 ? true : false}
						/>
						<div className={Style.CarouselFrameOuter}>
							<div
								className={Style.CarouselFrameInner}
								style={{ transform: `translateX(-${carouselIndex * 50}%)` }}>
								<div className={Style.Review} style={{ width: `${reviewsData.length * 50}%` }}>
									{reviewsData.map((info, index) => (
										<div className={Style.Rev} key={index}>
											{info.name && <h4>{info.name}</h4>}
											<p className={Style.TextDisplay}>{info.review}</p>
										</div>
									))}
								</div>
							</div>
						</div>
						<ButtonRound
							onClick={() => handleArrow(2)}
							disabled={carouselIndex === reviewsData.length - 2 ? true : false}
							size={windowWidth < 992 ? 'small' : 'medium'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Reviews;
