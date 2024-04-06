import { React } from 'react';
import { useHasIntersected } from 'components';
import Style from './servicesMobile.module.scss';
import { serviceContent } from 'content';

export default function ServicesMobile() {
	const [service1, service1Intersected] = useHasIntersected();
	const [service2, service2Intersected] = useHasIntersected();
	const [service3, service3Intersected] = useHasIntersected();
	const [service4, service4Intersected] = useHasIntersected();
	const [service5, service5Intersected] = useHasIntersected();
	const [service6, service6Intersected] = useHasIntersected();

	return (
		<div className={Style.ServicesMobile}>
			<div className={service1Intersected ? Style.ServiceShow : Style.Service} ref={service1}>
				<div className={Style.Bubble}>
					<div className={Style.BubbleInner}></div>
				</div>
				<div className={Style.Content}>
					<div className={Style.ServName}>
						<img
							src={serviceContent[0].image.url}
							alt={serviceContent[0].image.altText}
							className={Style.Icon}
						/>
						<h1 className={Style.Text}>{serviceContent[0].name}</h1>
					</div>
					<p className={Style.ServDescription}>{serviceContent[0].service}</p>
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
								src={serviceContent[1].image.url}
								alt={serviceContent[1].image.altText}
								className={Style.Icon}
							/>
						</div>
						<h1 className={Style.Text}>{serviceContent[1].name}</h1>
					</div>
					<p className={Style.ServDescription}>{serviceContent[1].service}</p>
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
								src={serviceContent[2].image.url}
								alt={serviceContent[2].image.altText}
								className={Style.Icon}
							/>
						</div>
						<h1 className={Style.Text}>{serviceContent[2].name}</h1>
					</div>
					<p className={Style.ServDescription}>{serviceContent[2].service}</p>
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
								src={serviceContent[3].image.url}
								alt={serviceContent[3].image.altText}
								className={Style.Icon}
							/>
						</div>
						<h1 className={Style.Text}>{serviceContent[3].name}</h1>
					</div>
					<p className={Style.ServDescription}>{serviceContent[3].service}</p>
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
								src={serviceContent[4].image.url}
								alt={serviceContent[4].image.altText}
								className={Style.Icon}
							/>
						</div>
						<h1 className={Style.Text}>{serviceContent[4].name}</h1>
					</div>
					<p className={Style.ServDescription}>{serviceContent[4].service}</p>
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
								src={serviceContent[5].image.url}
								alt={serviceContent[5].image.altText}
								className={Style.Icon}
							/>
						</div>
						<h1 className={Style.Text}>{serviceContent[5].name}</h1>
					</div>
					<p className={Style.ServDescription}>{serviceContent[5].service}</p>
				</div>
			</div>
		</div>
	);
}
