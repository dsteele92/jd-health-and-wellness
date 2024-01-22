import { React, useState, useEffect, useRef } from 'react';
import Style from './staff.module.scss';
import { useHasIntersected, useScroll, ButtonRound } from 'components';
import { staffInfo } from 'content';

export default function Staff() {
	const [carouselIndex, setCarouselIndex] = useState(0);
	const [showInfo, setShowInfo] = useState(-1);

	const [staff, staffIntersected] = useHasIntersected({ threshold: 0.25 });

	const windowWidth = window.innerWidth;

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

	const handleArrow = (delta) => {
		if (carouselIndex + delta < 0) {
			setCarouselIndex(0);
		} else if (carouselIndex + delta > staffInfo.length - 4) {
			setCarouselIndex(staffInfo.length - 4);
		} else {
			setCarouselIndex(carouselIndex + delta);
		}
		setShowInfo(-1);
	};

	return (
		<div
			className={staffIntersected ? Style.StaffShow : Style.Staff}
			ref={staff}
			onMouseLeave={() => setShowInfo(-1)}>
			<div className={Style.Bubble}>
				<div className={Style.BubbleInner}></div>
			</div>
			<div className={Style.Content}>
				<div className={Style.Carousel}>
					<ButtonRound
						onClick={() => handleArrow(-4)}
						direction='left'
						size={windowWidth < 992 ? 'small' : 'medium'}
						disabled={carouselIndex === 0 ? true : false}
					/>
					<div className={Style.CarouselFrameOuter}>
						<div
							className={Style.CarouselFrameInner}
							style={{ transform: `translateX(-${carouselIndex * 25}%)` }}>
							<div className={Style.Photos} style={{ width: `${staffInfo.length * 25}%` }}>
								{staffInfo.map((img, index) => (
									<div className={Style.PhotoContainer} key={index}>
										<div
											className={
												Style[`Photo${showInfo !== -1 && showInfo !== index ? 'Dim' : ''}`]
											}
											style={{ backgroundImage: `url(${img.url})` }}
											onMouseEnter={() => setShowInfo(index)}></div>
									</div>
								))}
							</div>
						</div>
					</div>
					<ButtonRound
						onClick={() => handleArrow(4)}
						disabled={carouselIndex === staffInfo.length - 4 ? true : false}
						size={windowWidth < 992 ? 'small' : 'medium'}
					/>
				</div>
				<div className={Style.TextDisplay}>
					<div className={showInfo >= 0 ? Style.StaffInfo : Style.StaffInfoHide}>
						<h3>{showInfo >= 0 ? staffInfo[showInfo].name : ''}</h3>
						<h4>{showInfo >= 0 ? staffInfo[showInfo].title : ''}</h4>
						<p>{showInfo >= 0 ? staffInfo[showInfo].info : ''}</p>
					</div>
					<div className={showInfo < 0 ? Style.MovingTextSm : Style.MovingTextSmHide}>
						<h1 ref={smText}>
							Hover over photos to read more · Hover over photos to read more · Hover over photos to read
							more · Hover over photos to read more · Hover over photos to read more · Hover over photos
							to read more · Hover over photos to read more ·{' '}
						</h1>
					</div>
					<div className={showInfo < 0 ? Style.MovingTextLg : Style.MovingTextLgHide}>
						<div className={Style.LargeText} ref={lgText}>
							Meet the team · Meet the team · Meet the team · Meet the team · Meet the team · Meet the
							team · Meet the team ·{' '}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
