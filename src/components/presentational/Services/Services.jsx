import { React, useEffect, useRef, forwardRef } from 'react';
import Style from './services.module.scss';
import { useScroll } from 'components';
import { serviceContent } from 'content';
import { HiArrowLongRight } from 'react-icons/hi2';

const Services = forwardRef((props, ref) => {
	const services = useRef();
	const service1L = useRef();
	const service2L = useRef();
	const service3L = useRef();
	const service4L = useRef();
	const service5L = useRef();
	const service6L = useRef();

	const { scrollY } = useScroll();

	useEffect(() => {
		// // see properties of services section div
		// console.dir(services.current);
		// // distance from top of page
		// console.log(services.current.offsetTop);
		// // approximate amount needed to scroll to reach beginning of services section
		// console.log(services.current.offsetTop - window.innerHeight);

		const scrollToServices = services.current.offsetTop - window.innerHeight;

		if (scrollY > scrollToServices) {
			const degrees = ((scrollY - scrollToServices) * 20) / 90;
			service1L.current.style.transform = `rotateY(${90 - degrees > 0 ? 90 - degrees : 0}deg)`;
			service2L.current.style.transform = `rotateY(${90 - degrees > 0 ? 90 - degrees : 0}deg)`;
			service3L.current.style.transform = `rotateY(${90 - degrees > 0 ? 90 - degrees : 0}deg)`;
			service4L.current.style.transform = `rotateY(${90 - degrees > 0 ? 90 - degrees : 0}deg)`;
			service5L.current.style.transform = `rotateY(${90 - degrees > 0 ? 90 - degrees : 0}deg)`;
			service6L.current.style.transform = `rotateY(${90 - degrees > 0 ? 90 - degrees : 0}deg)`;
		}
	}, [scrollY]);

	return (
		<div className={Style.Services} ref={services}>
			<div className={Style.Arrow}>
				<div className={Style.Bounce}>
					<HiArrowLongRight />
				</div>
			</div>
			<div className={Style.InnerWrapper}>
				<div className={Style.Service} ref={service1L}>
					<div className={Style.Name}>
						<img
							src={serviceContent[0].image.url}
							alt={serviceContent[0].image.altText}
							className={Style.Icon}
						/>
						<h2 className={Style.Text}>{serviceContent[0].name}</h2>
					</div>
					<p className={Style.Description}>{serviceContent[0].service}</p>
				</div>
				<div className={Style.Service} ref={service2L}>
					<div className={Style.Name}>
						<div className={Style.Icon}>
							<img
								src={serviceContent[1].image.url}
								alt={serviceContent[1].image.altText}
								className={Style.Icon}
							/>
						</div>
						<h2 className={Style.Text}>{serviceContent[1].name}</h2>
					</div>
					<p className={Style.Description}>{serviceContent[1].service}</p>
				</div>
				<div className={Style.Service} ref={service3L}>
					<div className={Style.Name}>
						<div className={Style.Icon}>
							<img
								src={serviceContent[2].image.url}
								alt={serviceContent[2].image.altText}
								className={Style.Icon}
							/>
						</div>
						<h2 className={Style.Text}>{serviceContent[2].name}</h2>
					</div>
					<p className={Style.Description}>{serviceContent[2].service}</p>
				</div>
				<div className={Style.Service} ref={service4L}>
					<div className={Style.Name}>
						<div className={Style.Icon}>
							<img
								src={serviceContent[3].image.url}
								alt={serviceContent[3].image.altText}
								className={Style.Icon}
							/>
						</div>
						<h2 className={Style.Text}>{serviceContent[3].name}</h2>
					</div>
					<p className={Style.Description}>{serviceContent[3].service}</p>
				</div>
				<div className={Style.Service} ref={service5L}>
					<div className={Style.Name}>
						<div className={Style.Icon}>
							<img
								src={serviceContent[4].image.url}
								alt={serviceContent[4].image.altText}
								className={Style.Icon}
							/>
						</div>
						<h2 className={Style.Text}>{serviceContent[4].name}</h2>
					</div>
					<p className={Style.Description}>{serviceContent[4].service}</p>
				</div>
				<div className={Style.Service} ref={service6L}>
					<div className={Style.Name}>
						<div className={Style.Icon}>
							<img
								src={serviceContent[5].image.url}
								alt={serviceContent[5].image.altText}
								className={Style.Icon}
							/>
						</div>
						<h2 className={Style.Text}>{serviceContent[5].name}</h2>
					</div>
					<p className={Style.Description}>{serviceContent[5].service}</p>
				</div>
			</div>
		</div>
	);
});

export default Services;
