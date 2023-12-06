import { React, useState, useEffect, useRef } from 'react';
import Style from './staff.module.scss';
import { useHasIntersected, useScroll, ButtonRound } from 'components';
// import { FaGripLines } from 'react-icons/fa';

export default function Staff() {
	const [carouselIndex, setCarouselIndex] = useState(0);
	const [showInfo, setShowInfo] = useState(-1);

	const [staff, staffIntersected] = useHasIntersected({ threshold: 0.25 });

	const smText = useRef();
	const lgText = useRef();

	const { scrollY } = useScroll();

	const staffPhotos = [
		{
			name: 'Eric Davis',
			title: 'MSW, BCD, LCSW, QMHP, MAC',
			url: 'https://res.cloudinary.com/dp1dn1ghw/image/upload/v1701026439/eric_g8csiz.jpg',
			info: 'Mr. Davis is passionate about helping individuals in their time of need; the homeless, the lost, individuals enslaved to addiction and those emotionally paralyzed by the struggles of life. He strives to bring resources and tools that bring hope in hopeless and fearful times. He endeavors to provide this care in a kind, compassionate, non-judgmental, and welcoming manner and encourages those who work with him to do the same. He and his colleagues want to be a blessing to you and your family in your time of need. Contact the office of JD Health and Wellness for more information today. He is also a Board Certified Diplomat is the profession’s premier advanced-generalist practice certification, embodying the highest standards in the areas of clinical education, training, and experience. The BCD is issued by the American Board of Examiners (ABE) to those who can demonstrate their ability to practice advanced-generalist clinical social work at a high level of competency.',
		},
		{
			name: 'Patty Koker',
			title: 'LCSW',
			url: 'https://res.cloudinary.com/dp1dn1ghw/image/upload/v1701026439/Patty_Photo_kwfvvc.jpg',
			info: 'Patty Koker is a QMHP, who graduated from Portland State University in 2019. Patty is passionate about serving her community through a harm reduction lens. She loves dogs, kids, reading, hiking and sunny locations. Her belief that we are all capable of change and reinvention of self across the lifespan allows her to create meaningful therapeutic relationships with those she serves.',
		},
		{
			name: 'Jaclyn Salcido-Giles',
			title: 'LCSW, CADC I',
			url: 'https://res.cloudinary.com/dp1dn1ghw/image/upload/v1701026437/Jaclyn_photo_otrv8s.jpg',
			info: 'Jackie identifies as a member of the Ho-Chunk Nation from Wisconsin. She is a Certified Alcohol and Drug Counselor as well as Qualified Mental Health Professional. Her humor, genuineness, gentle approach and understanding of the change process has helped many achieve their unique mental wellness goals. She is passionate about family of origin work, trauma, substance use disorders, and helping individuals discover meaning and purpose in their lives. Jackie works from a strengths-based perspective integrating techniques from motivational interviewing, dialectical behavioral therapy, cognitive behavioral therapy, narrative therapy and structural family therapy. She works with adults, adolescents and children.',
		},
		{
			name: 'Anna Boyd',
			title: 'ND',
			url: 'https://res.cloudinary.com/dp1dn1ghw/image/upload/v1701026437/Anna_qqtewh.jpg',
			info: 'Dr. Anna Boyd ND is a board certified licensed Naturopathic physician who wants to help her patients attain and maintain vibrant health and wellness. She does this following these six Naturopathic tenets: The healing power of nature, identify and treat the cause, first do no harm, treat the whole person, doctor as teacher, and prevention as the best medicine. She would love to help you on your path to wellness. Please contact her with any questions you may have.',
		},
		{
			name: 'Annie Clark-Delogu',
			title: 'ND',
			url: 'https://res.cloudinary.com/dp1dn1ghw/image/upload/v1701026436/AnnieCDpic_copy_zn3r1u.jpg',
			info: 'Dr. Clark is a licensed naturopathic physician beginning her first year of postgraduate residency at JD Health and Wellness. She is excited to be joining the existing team of practitioners, and looks forward to forming long lasting therapeutic relationships with both new and existing patients at the clinic and its offsite locations.<br/>During her training at the National University of National Medicine in Portland, Dr. Clark focused her clinical education on primary care and integrative mental health. She is passionate about practicing trauma-informed, individualized, patient-centered care. Prior to attending medical school, she gained extensive experience working closely with individuals addressing chemical dependency issues. She strongly believes that everyone can find a path to healing and improved quality of life, and hopes to get the chance to work with you on your journey to wellness.',
		},
		{
			name: 'Dr. Josie Boyle',
			title: '',
			url: 'https://res.cloudinary.com/dp1dn1ghw/image/upload/v1701026435/Josie_c08xac.jpg',
			info: 'Dr. Josie Boyle is a doctorate prepared family nurse practitioner that joined our clinic this Spring. She is committed to help her patients on their journey to living their best lives by addressing mind, body, and spirit. The nursing model incorporates your physical health with the social and emotional aspects of your life for a better outcome. Josie has a long history in healthcare,with experience in obstetrics, emergency medicine, and internal medicine. Most recently, addressing addiction and mental health have become a priority in her career. She is happy to talk with you about your health goals, please reach out with any questions.',
		},
		{
			name: 'Christina Cano-Young',
			title: 'CSWA, CADCI',
			url: 'https://res.cloudinary.com/dp1dn1ghw/image/upload/v1701026434/ChristinaCanoYoung_ptvrdg.jpg',
			info: 'Christina earned her Master’s of Social Work from Simmons University. Christina seeks to help clients recognize and utilize their unique strengths and skills to overcome obstacles and work through difficult times. Christina approaches her work with each client through a strength’s based, trauma informed, harm reduction lens, focusing on the client’s unique personal goals. Christina utilizes motivational interviewing, cognitive behavioral therapy, narrative therapy and solution focused therapy in her sessions. Christina is passionate about addiction’s recovery, autism, gender and sexual identity affirmation, and assisting families and couples. As a therapist, Christina will strive to create a safe and affirming space where you can openly express yourself and explore your goals and desires.',
		},
		{
			name: 'Pamela Jones',
			title: 'LPC-I, CADC II',
			url: 'https://res.cloudinary.com/dp1dn1ghw/image/upload/v1701026432/Pamela_qmqyzt.jpg',
			info: 'Pamela is a graduate from George Fox University where she earned her Master of Art degree in Clinical Mental Health Counseling. She is also a Certified Alcohol and Drug Counselor. Pamela describes herself to be warm and welcoming, empathetic, and easy to open up to. Her warmth, positivity, and belief that everyone is capable of healing and happiness has helped her create meaningful relationships with the individuals with whom she has worked. Her passion lies in the integration of addiction recovery and mental health, creating the opportunity for individuals to travel to less places to receive the help they want and need. She is also passionate about helping individuals find and become their best selves so they may have happy and fulfilling lives. She is eager to continue growing as a mental health professional. She utilizes a client-centered approach to counseling and draws from Motivational Interviewing, Acceptance and Commitment Therapy, Cognitive Behavioral Therapy, Dialectical Behavioral Therapy, and Brief Solution-Focused Therapy.',
		},
		{
			name: 'Dr. Hursey',
			title: 'MD',
			url: 'https://res.cloudinary.com/dp1dn1ghw/image/upload/v1701026431/Dr._Hursey_rkx3ld.jpg',
			info: 'Dr. Hursey is Family Physician specializing in medication assisted therapy. She earned her medical degree from Howard university. She completed her residency in family medicine at Arrowhead Regional Medical center. She is currently prescribed maintenance therapies, treats substance use disorders and other illnesses and conducts follow-ups and consultations. Her work has won her numerous awards and recognitions. Dr. Hursey is deeply committed to the well-being of her patients. She welcomed individuals and families from all ages. She has a thorough and precise approach to her consultations to ensure that she consistently provides accurate diagnosis and treatment plans.',
		},
		{
			name: 'Megan Monty',
			title: 'DNP, FNP-C',
			url: 'https://res.cloudinary.com/dp1dn1ghw/image/upload/v1701026430/MeganHeadshots-1_zgbuim.jpg',
			info: 'Megan joined will be joining our practice in September of 2022. She is a doctorate prepared board-certified Family Nurse Practitioner as of July 2018. She received both her masters and doctorate degrees from Oregon Health and Science University, completing her training in June of 2019. She has been practicing in the Tigard/Beaverton community as a Family Nurse Practitioner since October of 2018. Megan is a Beaverton native and grew up in the area. She attended Seattle Pacific University for her undergraduate degree. She has always believed nursing was her calling and finds fulfillment partnering with her patients to help them find success in their health. She focuses heavily on education and prevention when it comes to disease management. Her background consists of experience in women’s, adolescent and mental health care. She enjoys drawing, reading, baking and traveling. When she is not working, she likes to spend time with her husband, little one and Goldendoodle.',
		},
		{
			name: 'Kimberli Wicks',
			title: '',
			url: 'https://res.cloudinary.com/dp1dn1ghw/image/upload/v1701026429/Kimberli_yygnko.jpg',
			info: 'Kimberli Wicks is a professional counseling associate who graduated from George Fox University in 2003. Mother of two grown children, she loves the beach, camping and her tiny dog Olive. Play therapy, art and creativity are the backbone of her work with children and adolescents. She utilizes her sense of humor, expressive personality and warm honest approach in her work with families and individuals. Making a solid, trustworthy connection with her clients is her passion. She believes that is the critical foundation for healing to begin. She looks for challenges that can be turned into strengths in her clients. She focuses on behavioral issues, Autism Spectrum, anxiety, parenting challenges and trauma. Feedback she gets often is that she is relatable and non judgmental, but is not afraid to challenge clients outside of their comfort zone. She works with children, adolescents, individuals and families.',
		},
		{
			name: 'Katarina Markwalder',
			title: 'LPCA',
			url: 'https://res.cloudinary.com/dp1dn1ghw/image/upload/v1701026428/Katarina_Markwalder_di8fu0.jpg',
			info: '"I have been interested in the field of psychology since I took Psychology 101 in high school and since then, have spent many years exploring the different avenues available to best serve my clients. I am passionate about helping clients understand their mental health experiences and establish solid coping skills as well as exercises geared towards improving the client’s quality of life.<br/>"Emotions are a crucial part of being human and the majority of my work with clients is emotionally focused. This type of therapy centers around improving communication skills and relational attachment. The adaptability and techniques of this theory are versatile in that they can be used not only with individuals, but also with couples and families."',
		},
		{
			name: 'Mariana Barrera',
			title: 'MSW, CSWA',
			url: 'https://res.cloudinary.com/dp1dn1ghw/image/upload/v1701026428/Mariana_Barrera_qyfg0u.jpg',
			info: 'Mental health is essential at every stage of our life. It includes our emotional, psychological, and social well-being. I’m passionate about developing strong relationships with my clients. I firmly believe that creating a safe place where they feel safe and comfortable sharing their struggles is fundamental. My passion is to guide individuals through their trauma and unexpected life stressors. My goal as a therapist is to empower individuals to uncover their strengths and to help them heal from their traumatic experiences. I’m committed to providing a space for self-growth and healing.<br/>As a bilingual and bicultural therapist, my therapeutic practice approach is strength-based and trauma-informed. I have been trained in and use different trauma-informed modalities, including Cognitive Behavioral Therapy (CBT), Dialectical Behavioral Therapy (DBT), Acceptance and Commitment Therapy (ACT), and Motivational Interviewing, and currently been trained in becoming an EMDR trained therapist. I have received additional training in Collaborative Assessment and Management of Suicidality (CAMS) to work with individuals at high suicidal risk. I’m also working professionally within the context of alcohol and substance use. I have worked with families, children, adolescents, adults, and the homeless community throughout my practice.<br/>I earned a bachelor’s degree in psychology from Western Oregon University and a master’s degree in social work from Portland State University, focusing on clinical social work. I am currently working on my LSCW. My education and work experience has allowed me to work with individuals who experience Crisis, Depression, generalized anxiety, Panic attacks, mood disorders, obsessive-compulsive disorder, complex PTSD, ADHD, and Substance Use.',
		},
		{
			name: 'Dr. Gina',
			title: '',
			url: 'https://res.cloudinary.com/dp1dn1ghw/image/upload/v1701026427/dr-gina_sd0ofx.jpg',
			info: 'Dr. Gina (she/her) is a biracial licensed Naturopathic Physician who graduated from the National University of Natural Medicine in 2021. She has had extra training supporting client’s mental health needs, receiving a master’s degree in integrative mental health in 2020. Her core values are to practice from an equity framework, where all patients and their individual experiences are welcome.<br/>She strives to collaborate with patients, with kindness and listening. Her focus is to provide holistic primary care by addressing her patients physical, mental, and emotional needs.<br/>When Dr. Gina is not working you can find her spending time with her children, 12-year-olddog, and partner. She loves camping, cooking, swimming, and ultimate frisbee.',
		},
	];

	useEffect(() => {
		// console.log((50 * scrollY) / window.innerHeight);
		const delta = (3 * scrollY) / window.innerHeight;
		const deltaSlow = scrollY / window.innerHeight;
		if (staffIntersected) {
			smText.current.style.transform = `translateX(${-delta % 100}%)`;
			lgText.current.style.transform = `translateX(${deltaSlow % 100}%)`;
		}
	}, [scrollY, staffIntersected]);

	const handleArrow = (delta) => {
		// const current = carouselIndex;
		if (carouselIndex + delta < 0) {
			setCarouselIndex(0);
			// setShowInfo(0);
		} else if (carouselIndex + delta > staffPhotos.length - 4) {
			setCarouselIndex(staffPhotos.length - 4);
			// setShowInfo(staffPhotos.length - 4);
		} else {
			setCarouselIndex(carouselIndex + delta);
			// setShowInfo(carouselIndex + delta);
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
					<ButtonRound onClick={() => handleArrow(-4)} direction='left' />
					<div className={Style.CarouselFrameOuter}>
						<div
							className={Style.CarouselFrameInner}
							style={{ transform: `translateX(-${carouselIndex * 25}%)` }}>
							<div className={Style.Photos} style={{ width: `${staffPhotos.length * 25}%` }}>
								{staffPhotos.map((img, index) => (
									<div
										className={Style[`Photo${showInfo !== -1 && showInfo !== index ? 'Dim' : ''}`]}
										style={{ backgroundImage: `url(${img.url})` }}
										key={index}
										onMouseEnter={() => setShowInfo(index)}></div>
								))}
							</div>
						</div>
					</div>
					<ButtonRound onClick={() => handleArrow(4)} />
					{/* <div className={Style.CarouselBottom}>
						{[0, 1, 2, 3].map((index) => (
							<div
								className={Style[`CarouselSelect${staffPhotos.length - showInfo <=4 ? (showInfo - ()) showInfo % 4 === index ? 'Selected' : ''}`]}
								key={index}>
								<FaGripLines />
							</div>
						))}
					</div> */}
				</div>
				<div className={Style.TextDisplay}>
					<div className={showInfo >= 0 ? Style.StaffInfo : Style.StaffInfoHide}>
						<h3>{showInfo >= 0 ? staffPhotos[showInfo].name : ''}</h3>
						<h4>{showInfo >= 0 ? staffPhotos[showInfo].title : ''}</h4>
						<p>{showInfo >= 0 ? staffPhotos[showInfo].info : ''}</p>
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
