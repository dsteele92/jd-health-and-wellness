import { React, forwardRef } from 'react';
import Style from './community.module.scss';
import { useHasIntersected, SectionHeader } from 'components';
import { communityLinks } from 'content';
// import { Modal } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';

const Community = forwardRef((props, ref) => {
	const [community, communityIntersected] = useHasIntersected({ threshold: 0.25 });
	// const [articleSelected, setArticleSelected] = useState(-1);
	// const [opened, { open, close }] = useDisclosure(false);

	// const formModal = useMemo(() => {
	// 	return <IntakeForm />;
	// }, []);

	return (
		<div className={Style.Community} ref={ref}>
			<div className={Style.Tint}></div>
			<div className={Style.InnerWrapper}>
				<section className={Style.Stripe}>
					<SectionHeader top='Community' />
					<div className={Style.StripeContent}>
						{/* <h2>Say something</h2> */}
						<p>
							We named the Clinic JD after the children of Both Felicity and Eric Davis Josiah, Jazmyn,
							and Lastly Joshua. The name JD was inspired by Joshua Davis the youngest grandchild of Dr.
							Oscar and Lerma Quijano. Joshua is a book in the bible and was a leader charged with leading
							his people after his servant Moses had passed on. Joshua was the next leader to lead the
							Israelites who had been traveling in the wilderness for thirty years getting the same
							results. Joshua was given a special charge as he was told in Joshua 1:7. Be strong and very
							courageous… "Do not be afraid; do not be discouraged, for the Lord your God will be with you
							wherever you go.” This commandment was given to him prior to entering a new world. We are
							entering a new health model care and we will be here for you and the community as we
							transition into this new system of care.
						</p>
					</div>
				</section>
				<div className={Style.Right} ref={community}>
					<div className={Style[`RightContent${communityIntersected ? 'Show' : ''}`]}>
						{communityLinks.map((article, index) => (
							<div key={index} className={Style[`Article${index}`]}>
								<h1 className={Style.Number}>{`0${index + 1}`}</h1>
								<h3 className={Style.Name}>{article.name}</h3>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
});

export default Community;
