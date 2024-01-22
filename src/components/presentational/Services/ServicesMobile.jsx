import { React } from 'react';
import { useHasIntersected } from 'components';
import Style from './servicesMobile.module.scss';

export default function ServicesMobile() {
	const [service1, service1Intersected] = useHasIntersected({ threshold: 0.25 });
	const [service2, service2Intersected] = useHasIntersected({ threshold: 0.25 });
	const [service3, service3Intersected] = useHasIntersected({ threshold: 0.25 });
	const [service4, service4Intersected] = useHasIntersected({ threshold: 0.25 });
	const [service5, service5Intersected] = useHasIntersected({ threshold: 0.25 });
	const [service6, service6Intersected] = useHasIntersected({ threshold: 0.25 });

	return (
		<div className={Style.ServicesMobile}>
			<div className={service1Intersected ? Style.ServiceShow : Style.Service} ref={service1}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.ServName}>
						<img
							src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1697654802/JD/icons8-family-96_vuffga.png'
							alt='family medicine icon'
							className={Style.Icon}
						/>
						<h1 className={Style.Text}>Family Medicine</h1>
					</div>
					<p className={Style.ServDescription}>
						Our experience in family medicine enables us to accept and treat patients of all ages. The staff
						at JD Health & Wellness Center will get to know you personally in order to better understand
						your individual needs and concerns. We keep track of your general health with an annual wellness
						exam and use this as a foundation for healthy living planning.
					</p>
				</div>
			</div>
			<div className={service2Intersected ? Style.ServiceShow : Style.Service} ref={service2}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.ServName}>
						<div className={Style.Icon}>
							<img
								src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1697654806/JD/icons8-mental-health-64_wgenol.png'
								alt='mental health icon'
								className={Style.Icon}
							/>
						</div>
						<h1 className={Style.Text}>Mental Health</h1>
					</div>
					<p className={Style.ServDescription}>
						Maintaining your mental health is essential to living a healthy, positive life. We understand
						that managing your mental health on your own is a difficult task which is why we provide
						nurturing and compassionate support for our patients in the form of psychotherapy.
					</p>
				</div>
			</div>
			<div className={service3Intersected ? Style.ServiceShow : Style.Service} ref={service3}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.ServName}>
						<div className={Style.Icon}>
							<img
								src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1697654810/JD/icons8-syringe-96_hphcd5.png'
								alt='addiction treatment icon'
								className={Style.Icon}
							/>
						</div>
						<h1 className={Style.Text}>Addiction Treatment</h1>
					</div>
					<p className={Style.ServDescription}>
						Our clinic in Salem, OR, provides a safe place for those struggling with addiction to overcome
						their dependency. We offer our patient's addiction treatment for a wide range of drugs,
						including opioids and narcotics. No matter what your story is or where you come from, we're here
						to help.
					</p>
				</div>
			</div>
			<div className={service4Intersected ? Style.ServiceShow : Style.Service} ref={service4}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.ServName}>
						<div className={Style.Icon}>
							<img
								src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1700857767/icons8-trust-64_d2qzwq.png'
								alt='counseling icon'
								className={Style.Icon}
							/>
						</div>
						<h1 className={Style.Text}>Counseling Services</h1>
					</div>
					<p className={Style.ServDescription}>
						JD Health & Wellness Center offers a variety of counseling services for our patients so that we
						can best meet your individual needs. Our staff counsels patients on everything from basic health
						concerns like nutrition to addiction management. Whether you're coping with trauma or simply
						hoping to improve your lifestyle, contact us today.
					</p>
				</div>
			</div>
			<div className={service5Intersected ? Style.ServiceShow : Style.Service} ref={service5}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.ServName}>
						<div className={Style.Icon}>
							<img
								src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1700857779/icons8-medication-64_thodbg.png'
								alt='medication icon'
								className={Style.Icon}
							/>
						</div>
						<h1 className={Style.Text}>Medication Assisted Therapy</h1>
					</div>
					<p className={Style.ServDescription}>
						Medication-assisted therapy is a key component in fighting against addition. By combining
						medication and therapy together, a more effective treatment is produced. Please get in touch so
						that we can create a plan that suits your needs.
					</p>
				</div>
			</div>
			<div className={service6Intersected ? Style.ServiceShow : Style.Service} ref={service6}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.ServName}>
						<div className={Style.Icon}>
							<img
								src='https://res.cloudinary.com/dp1dn1ghw/image/upload/v1700857787/icons8-brain-64_l9evnl.png'
								alt='neuro icon'
								className={Style.Icon}
							/>
						</div>
						<h1 className={Style.Text}>Neurofeedback Therapy</h1>
					</div>
					<p className={Style.ServDescription}>
						Neurofeedback is direct training of brain function to more appropriate patterns. Neurofeedback
						is also called EEG Biofeedback, because it is based on electrical brain activity, the
						electroencephalogram, or EEG. Neurofeedback is training in self-regulation.
					</p>
				</div>
			</div>
		</div>
	);
}
