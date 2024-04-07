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
			<main>
				<Stack className={Style.InnerWrapper}>
					<div className={Style.AboutSubSection} ref={maps}>
						<h1>Contact us to schedule an appointment</h1>
						<div className={Style[`Content${mapsIntersected ? 'Show' : ''}`]}></div>
					</div>
				</Stack>
			</main>
			<div className={Style.Outer}>
				<div className={Style.MapsContent}>
					<GoogleMaps />
				</div>
				<section className={Style.ContactContainer} ref={contact}>
					<div className={`${Style.Input} ${Style.FirstName}`}>
						<input
							type='text'
							id='firstName'
							placeholder='FIRST NAME'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className={`${Style.Input} ${Style.LastName}`}>
						<input
							type='text'
							id='lastName'
							placeholder='LAST NAME'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className={`${Style.Input} ${Style.Phone}`}>
						<input
							type='tel'
							id='phone'
							placeholder='PHONE'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					<div className={`${Style.Input} ${Style.Email}`}>
						<input
							type='email'
							id='email'
							placeholder='EMAIL'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className={`${Style.Input} ${Style.Message}`}>
						<textarea
							name='message'
							id='message'
							placeholder='MESSAGE'
							maxLength='500'
							value={message}
							onChange={(e) => setMessage(e.target.value)}></textarea>
					</div>
					<div
						className={`${Style.Button} ${Style.Submit}`}
						onMouseEnter={() => setSubmitHover(true)}
						onMouseLeave={() => setSubmitHover(false)}>
						<div className={Style.Bubble}>
							<div className={Style.BubbleInner}></div>
						</div>
						<div className={Style.BubbleContent}>
							<ButtonRoundInverse size='small' direction='right' active={submitHover} section='Contact' />
							<h3>SEND</h3>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
});

export default Contact;
