import { React, useEffect, useRef, forwardRef } from 'react';
import Style from './services.module.scss';
import { useScroll } from 'components';
import { serviceContent } from 'content';

const Services = forwardRef((props, ref) => {
	const services = useRef();
	const service1L = useRef();
	const service2L = useRef();
	const service3L = useRef();
	const service4L = useRef();
	const service5L = useRef();
	const service6L = useRef();
	const service1R = useRef();
	const service2R = useRef();
	const service3R = useRef();
	const service4R = useRef();
	const service5R = useRef();
	const service6R = useRef();

	const { scrollY } = useScroll();

	useEffect(() => {
		// // see properties of services section div
		// console.dir(services.current);
		// // distance from top of page
		// console.log(services.current.offsetTop);
		// // approximate amount needed to scroll to reach beginning of services section
		// console.log(services.current.offsetTop - window.innerHeight);
		// // height of service sub-sections (including margins)
		// console.log(service1L.current.clientHeight + 8);

		const scrollToServices = services.current.offsetTop - window.innerHeight;
		const serviceHeight = service1L.current.clientHeight + 8;

		if ((scrollToServices + 2 * serviceHeight - scrollY) / (2 * serviceHeight) > 1) {
			service1L.current.style.left = '25%';
		} else if ((scrollToServices + 2 * serviceHeight - scrollY) / (2 * serviceHeight) < 0) {
			service1L.current.style.left = '0%';
		} else {
			service1L.current.style.left = `${
				25 * ((scrollToServices + 2 * serviceHeight - scrollY) / (2 * serviceHeight))
			}%`;
		}

		if ((scrollToServices + 3 * serviceHeight - scrollY) / (2 * serviceHeight) > 1) {
			service2L.current.style.left = '25%';
		} else if ((scrollToServices + 3 * serviceHeight - scrollY) / (2 * serviceHeight) < 0) {
			service2L.current.style.left = '0%';
		} else {
			service2L.current.style.left = `${
				25 * ((scrollToServices + 3 * serviceHeight - scrollY) / (2 * serviceHeight))
			}%`;
		}

		if ((scrollToServices + 4 * serviceHeight - scrollY) / (2 * serviceHeight) > 1) {
			service3L.current.style.left = '25%';
		} else if ((scrollToServices + 4 * serviceHeight - scrollY) / (2 * serviceHeight) < 0) {
			service3L.current.style.left = '0%';
		} else {
			service3L.current.style.left = `${
				25 * ((scrollToServices + 4 * serviceHeight - scrollY) / (2 * serviceHeight))
			}%`;
		}

		if ((scrollToServices + 5 * serviceHeight - scrollY) / (2 * serviceHeight) > 1) {
			service4L.current.style.left = '25%';
		} else if ((scrollToServices + 5 * serviceHeight - scrollY) / (2 * serviceHeight) < 0) {
			service4L.current.style.left = '0%';
		} else {
			service4L.current.style.left = `${
				25 * ((scrollToServices + 5 * serviceHeight - scrollY) / (2 * serviceHeight))
			}%`;
		}

		if ((scrollToServices + 6 * serviceHeight - scrollY) / (2 * serviceHeight) > 1) {
			service5L.current.style.left = '25%';
		} else if ((scrollToServices + 6 * serviceHeight - scrollY) / (2 * serviceHeight) < 0) {
			service5L.current.style.left = '0%';
		} else {
			service5L.current.style.left = `${
				25 * ((scrollToServices + 6 * serviceHeight - scrollY) / (2 * serviceHeight))
			}%`;
		}

		if ((scrollToServices + 7 * serviceHeight - scrollY) / (2 * serviceHeight) > 1) {
			service6L.current.style.left = '25%';
		} else if ((scrollToServices + 7 * serviceHeight - scrollY) / (2 * serviceHeight) < 0) {
			service6L.current.style.left = '0%';
		} else {
			service6L.current.style.left = `${
				25 * ((scrollToServices + 7 * serviceHeight - scrollY) / (2 * serviceHeight))
			}%`;
		}

		if ((scrollToServices + 2 * serviceHeight - scrollY) / (2 * serviceHeight) > 1) {
			service1R.current.style.right = '25%';
		} else if ((scrollToServices + 2 * serviceHeight - scrollY) / (2 * serviceHeight) < 0) {
			service1R.current.style.right = '0%';
		} else {
			service1R.current.style.right = `${
				25 * ((scrollToServices + 2 * serviceHeight - scrollY) / (2 * serviceHeight))
			}%`;
		}

		if ((scrollToServices + 3 * serviceHeight - scrollY) / (2 * serviceHeight) > 1) {
			service2R.current.style.right = '25%';
		} else if ((scrollToServices + 3 * serviceHeight - scrollY) / (2 * serviceHeight) < 0) {
			service2R.current.style.right = '0%';
		} else {
			service2R.current.style.right = `${
				25 * ((scrollToServices + 3 * serviceHeight - scrollY) / (2 * serviceHeight))
			}%`;
		}

		if ((scrollToServices + 4 * serviceHeight - scrollY) / (2 * serviceHeight) > 1) {
			service3R.current.style.right = '25%';
		} else if ((scrollToServices + 4 * serviceHeight - scrollY) / (2 * serviceHeight) < 0) {
			service3R.current.style.right = '0%';
		} else {
			service3R.current.style.right = `${
				25 * ((scrollToServices + 4 * serviceHeight - scrollY) / (2 * serviceHeight))
			}%`;
		}

		if ((scrollToServices + 5 * serviceHeight - scrollY) / (2 * serviceHeight) > 1) {
			service4R.current.style.right = '25%';
		} else if ((scrollToServices + 5 * serviceHeight - scrollY) / (2 * serviceHeight) < 0) {
			service4R.current.style.right = '0%';
		} else {
			service4R.current.style.right = `${
				25 * ((scrollToServices + 5 * serviceHeight - scrollY) / (2 * serviceHeight))
			}%`;
		}

		if ((scrollToServices + 6 * serviceHeight - scrollY) / (2 * serviceHeight) > 1) {
			service5R.current.style.right = '25%';
		} else if ((scrollToServices + 6 * serviceHeight - scrollY) / (2 * serviceHeight) < 0) {
			service5R.current.style.right = '0%';
		} else {
			service5R.current.style.right = `${
				25 * ((scrollToServices + 6 * serviceHeight - scrollY) / (2 * serviceHeight))
			}%`;
		}

		if ((scrollToServices + 7 * serviceHeight - scrollY) / (2 * serviceHeight) > 1) {
			service6R.current.style.right = '25%';
		} else if ((scrollToServices + 7 * serviceHeight - scrollY) / (2 * serviceHeight) < 0) {
			service6R.current.style.right = '0%';
		} else {
			service6R.current.style.right = `${
				25 * ((scrollToServices + 7 * serviceHeight - scrollY) / (2 * serviceHeight))
			}%`;
		}
	}, [scrollY]);

	return (
		<div className={Style.Services} ref={services}>
			<div className={Style.Service}>
				<div className={Style.ServName} ref={service1L}>
					<img
						src={serviceContent[0].image.url}
						alt={serviceContent[0].image.altText}
						className={Style.Icon}
					/>
					<h2 className={Style.Text}>{serviceContent[0].name}</h2>
				</div>
				<p className={Style.ServDescription} ref={service1R}>
					{serviceContent[0].service}
				</p>
			</div>
			<div className={Style.Service}>
				<div className={Style.ServName} ref={service2L}>
					<div className={Style.Icon}>
						<img
							src={serviceContent[1].image.url}
							alt={serviceContent[1].image.altText}
							className={Style.Icon}
						/>
					</div>
					<h2 className={Style.Text}>{serviceContent[1].name}</h2>
				</div>
				<p className={Style.ServDescription} ref={service2R}>
					{serviceContent[1].service}
				</p>
			</div>
			<div className={Style.Service}>
				<div className={Style.ServName} ref={service3L}>
					<div className={Style.Icon}>
						<img
							src={serviceContent[2].image.url}
							alt={serviceContent[2].image.altText}
							className={Style.Icon}
						/>
					</div>
					<h2 className={Style.Text}>{serviceContent[2].name}</h2>
				</div>
				<p className={Style.ServDescription} ref={service3R}>
					{serviceContent[2].service}
				</p>
			</div>
			<div className={Style.Service}>
				<div className={Style.ServName} ref={service4L}>
					<div className={Style.Icon}>
						<img
							src={serviceContent[3].image.url}
							alt={serviceContent[3].image.altText}
							className={Style.Icon}
						/>
					</div>
					<h2 className={Style.Text}>{serviceContent[3].name}</h2>
				</div>
				<p className={Style.ServDescription} ref={service4R}>
					{serviceContent[3].service}
				</p>
			</div>
			<div className={Style.Service}>
				<div className={Style.ServName} ref={service5L}>
					<div className={Style.Icon}>
						<img
							src={serviceContent[4].image.url}
							alt={serviceContent[4].image.altText}
							className={Style.Icon}
						/>
					</div>
					<h2 className={Style.Text}>{serviceContent[4].name}</h2>
				</div>
				<p className={Style.ServDescription} ref={service5R}>
					{serviceContent[4].service}
				</p>
			</div>
			<div className={Style.Service}>
				<div className={Style.ServName} ref={service6L}>
					<div className={Style.Icon}>
						<img
							src={serviceContent[5].image.url}
							alt={serviceContent[5].image.altText}
							className={Style.Icon}
						/>
					</div>
					<h2 className={Style.Text}>{serviceContent[5].name}</h2>
				</div>
				<p className={Style.ServDescription} ref={service6R}>
					{serviceContent[5].service}
				</p>
			</div>
		</div>
	);
});

export default Services;
