import { React, useState, forwardRef } from 'react';
import { Stack } from '@mantine/core';
import Style from './contact.module.scss';
import { useHasIntersected, SectionHeader, ButtonRoundInverse, GoogleMaps } from 'components';

const Contact = forwardRef((props, ref) => {
	const [contact, contactIntersected] = useHasIntersected();
	const [maps, mapsIntersected] = useHasIntersected();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [submitHover, setSubmitHover] = useState(false);

	return (
		<div className={Style.Contact} ref={ref}>
			<Stack className={Style.InnerWrapper}>
				<div className={Style.AboutSubSection} ref={contact}>
					<SectionHeader top='Contact' />
					<div className={Style[`Content${contactIntersected ? 'Show' : ''}`]}>
						<section className={Style.ContactContainer}>
							<div
								className={
									contactIntersected
										? `${Style.InputShow} ${Style.FirstName}`
										: `${Style.Input} ${Style.FirstName}`
								}>
								<div className={Style.Bubble}>
									<div className={Style.BubbleInner}></div>
								</div>
								<div className={Style.BubbleContent}>
									<input
										type='text'
										id='firstName'
										placeholder='FIRST NAME'
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
									/>
								</div>
							</div>
							<div
								className={
									contactIntersected
										? `${Style.InputShow} ${Style.LastName}`
										: `${Style.Input} ${Style.LastName}`
								}>
								<div className={Style.Bubble}>
									<div className={Style.BubbleInner}></div>
								</div>
								<div className={Style.BubbleContent}>
									<input
										type='text'
										id='lastName'
										placeholder='LAST NAME'
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
									/>
								</div>
							</div>
							<div
								className={
									contactIntersected
										? `${Style.InputShow} ${Style.Phone}`
										: `${Style.Input} ${Style.Phone}`
								}>
								<div className={Style.Bubble}>
									<div className={Style.BubbleInner}></div>
								</div>
								<div className={Style.BubbleContent}>
									<input
										type='tel'
										id='phone'
										placeholder='PHONE'
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
									/>
								</div>
							</div>
							<div
								className={
									contactIntersected
										? `${Style.InputShow} ${Style.Email}`
										: `${Style.Input} ${Style.Email}`
								}>
								<div className={Style.Bubble}>
									<div className={Style.BubbleInner}></div>
								</div>
								<div className={Style.BubbleContent}>
									<input
										type='email'
										id='email'
										placeholder='EMAIL'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
							</div>
							<div
								className={
									contactIntersected
										? `${Style.InputShow} ${Style.Message}`
										: `${Style.Input} ${Style.Message}`
								}>
								<div className={Style.Bubble}>
									<div className={Style.BubbleInner}></div>
								</div>
								<div className={Style.BubbleContent}>
									<textarea
										name='message'
										id='message'
										placeholder='MESSAGE'
										maxLength='500'
										value={message}
										onChange={(e) => setMessage(e.target.value)}></textarea>
								</div>
							</div>
							<div
								className={
									contactIntersected
										? `${Style.ButtonShow} ${Style.Submit}`
										: `${Style.Button} ${Style.Submit}`
								}
								onMouseEnter={() => setSubmitHover(true)}
								onMouseLeave={() => setSubmitHover(false)}>
								<div className={Style.Bubble}>
									<div className={Style.BubbleInner}></div>
								</div>
								<div className={Style.BubbleContent}>
									<ButtonRoundInverse
										size='small'
										direction='right'
										active={submitHover}
										section='Contact'
									/>
									<h3>SEND</h3>
								</div>
							</div>
						</section>
					</div>
				</div>
				<div className={Style.AboutSubSection} ref={maps}>
					<SectionHeader top='Location' />
					<div className={Style[`Content${mapsIntersected ? 'Show' : ''}`]}>
						<div className={Style.MapsContent}>
							<GoogleMaps />
						</div>
					</div>
				</div>
			</Stack>
		</div>
	);
});

export default Contact;
