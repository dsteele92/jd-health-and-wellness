import { React, useState } from 'react';
import Style from './staffMobile.module.scss';
import { useHasIntersected, ButtonRound } from 'components';
import { staffInfo } from 'content';

export default function StaffMobile() {
	const [carouselIndex, setCarouselIndex] = useState(0);

	const [staff, staffIntersected] = useHasIntersected({ threshold: 0.25 });

	const handleArrow = (delta) => {
		if (carouselIndex + delta < 0 || carouselIndex + delta === staffInfo.length) return;
		setCarouselIndex(carouselIndex + delta);
	};

	return (
		<div className={staffIntersected ? Style.StaffShow : Style.Staff} ref={staff}>
			<div className={Style.Bubble}>
				<div className={Style.BubbleInner}></div>
			</div>
			<div className={Style.Content}>
				<div className={Style.Carousel}>
					<div className={Style.CarouselFrameOuter}>
						<div
							className={Style.CarouselFrameInner}
							style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
							<div className={Style.Members} style={{ width: `${staffInfo.length * 100}%` }}>
								{staffInfo.map((info, index) => (
									<div className={Style.Info} key={index}>
										<div className={Style.Title}>
											<h4>{info.name}</h4>
											{info.title && <h4>{info.title}</h4>}
										</div>
										<div className={Style.TextDisplay}>
											<p>{info.info}</p>
										</div>
										<div
											className={Style.Photo}
											style={{ backgroundImage: `url(${info.url})` }}></div>
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
							disabled={carouselIndex === staffInfo.length - 4 ? true : false}
							size='small'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
