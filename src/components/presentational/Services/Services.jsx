import { React, useEffect, useRef } from 'react';
import Style from './services.module.scss';
import { useScroll } from 'components';

export default function Services() {
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
						src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1697654802/JD/icons8-family-96_vuffga.png'
						alt='family medicine icon'
						className={Style.Icon}
					/>
					<div className={Style.Text}>Family Medicine</div>
				</div>
				<div className={Style.ServDescription} ref={service1R}>
					Our experience in family medicine enables us to accept and treat patients of all ages. The staff at
					JD Health & Wellness Center will get to know you personally in order to better understand your
					individual needs and concerns. We keep track of your general health with an annual wellness exam and
					use this as a foundation for healthy living planning.
				</div>
			</div>
			<div className={Style.Service}>
				<div className={Style.ServName} ref={service2L}>
					<div className={Style.Icon}>
						<img
							src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1697654806/JD/icons8-mental-health-64_wgenol.png'
							alt='mental health icon'
							className={Style.Icon}
						/>
					</div>
					<div className={Style.Text}>Mental Health</div>
				</div>
				<div className={Style.ServDescription} ref={service2R}>
					Maintaining your mental health is essential to living a healthy, positive life. We understand that
					managing your mental health on your own is a difficult task which is why we provide nurturing and
					compassionate support for our patients in the form of psychotherapy.
				</div>
			</div>
			<div className={Style.Service}>
				<div className={Style.ServName} ref={service3L}>
					<div className={Style.Icon}>
						<img
							src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1697654810/JD/icons8-syringe-96_hphcd5.png'
							alt='addiction treatment icon'
							className={Style.Icon}
						/>
					</div>
					<div className={Style.Text}>Addiction Treatment</div>
				</div>
				<div className={Style.ServDescription} ref={service3R}>
					Our clinic in Salem, OR, provides a safe place for those struggling with addiction to overcome their
					dependency. We offer our patient's addiction treatment for a wide range of drugs, including opioids
					and narcotics. No matter what your story is or where you come from, we're here to help.
				</div>
			</div>
			<div className={Style.Service}>
				<div className={Style.ServName} ref={service4L}>
					<div className={Style.Icon}>
						<img
							src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1700857767/icons8-trust-64_d2qzwq.png'
							alt='counseling icon'
							className={Style.Icon}
						/>
					</div>
					<div className={Style.Text}>Counseling Services</div>
				</div>
				<div className={Style.ServDescription} ref={service4R}>
					JD Health & Wellness Center offers a variety of counseling services for our patients so that we can
					best meet your individual needs. Our staff counsels patients on everything from basic health
					concerns like nutrition to addiction management. Whether you're coping with trauma or simply hoping
					to improve your lifestyle, contact us today.
				</div>
			</div>
			<div className={Style.Service}>
				<div className={Style.ServName} ref={service5L}>
					<div className={Style.Icon}>
						<img
							src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1700857779/icons8-medication-64_thodbg.png'
							alt='medication icon'
							className={Style.Icon}
						/>
					</div>
					<div className={Style.Text}>Medication Assisted Therapy</div>
				</div>
				<div className={Style.ServDescription} ref={service5R}>
					Medication-assisted therapy is a key component in fighting against addition. By combining medication
					and therapy together, a more effective treatment is produced. Please get in touch so that we can
					create a plan that suits your needs.
				</div>
			</div>
			<div className={Style.Service}>
				<div className={Style.ServName} ref={service6L}>
					<div className={Style.Icon}>
						<img
							src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1700857787/icons8-brain-64_l9evnl.png'
							alt='neuro icon'
							className={Style.Icon}
						/>
					</div>
					<div className={Style.Text}>Neurofeedback Therapy</div>
				</div>
				<div className={Style.ServDescription} ref={service6R}>
					Neurofeedback is direct training of brain function to more appropriate patterns. Neurofeedback is
					also called EEG Biofeedback, because it is based on electrical brain activity, the
					electroencephalogram, or EEG. Neurofeedback is training in self-regulation.
				</div>
			</div>
		</div>
	);
}
