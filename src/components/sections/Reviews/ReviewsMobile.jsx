import { React, useState, forwardRef } from 'react';
import Style from './reviewsMobile.module.scss';
import { useHasIntersected, ButtonRound, SectionHeader } from 'components';
import { reviewsData } from 'content';

const ReviewsMobile = forwardRef((props, ref) => {
	const [carouselIndex, setCarouselIndex] = useState(0);

	const [reviews, reviewsIntersected] = useHasIntersected();

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
						<div className={Style.CarouselFrameOuter}>
							<div
								className={Style.CarouselFrameInner}
								style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
								<div className={Style.Members} style={{ width: `${reviewsData.length * 100}%` }}>
									{reviewsData.map((info, index) => (
										<div className={Style.Info} key={index}>
											{info.name && <h4>{info.name}</h4>}
											<p className={Style.TextDisplay}>{info.review}</p>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className={Style.Buttons}>
							<ButtonRound
								onClick={() => handleArrow(-1)}
								direction='left'
								size='small'
								disabled={carouselIndex === 0 ? true : false}
							/>
							<ButtonRound
								onClick={() => handleArrow(1)}
								disabled={carouselIndex === reviewsData.length - 4 ? true : false}
								size='small'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default ReviewsMobile;
