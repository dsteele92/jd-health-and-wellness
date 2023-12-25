import { React, useState } from 'react';
import Style from './contact.module.scss';
import { useHasIntersected, SectionHeader, ButtonRoundInverse } from 'components';

export default function Contact() {
	const [contact, contactIntersected] = useHasIntersected({ threshold: 0.25 });

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [submitHover, setSubmitHover] = useState(false);

	return (
		<div>
			<SectionHeader text='CONTACT US' section='Contact' />
			<div className={Style.Contact} ref={contact}>
				<div
					className={
						contactIntersected
							? `${Style.InputShow} ${Style.FirstName}`
							: `${Style.Input} ${Style.FirstName}`
					}>
					<div className={Style.Bubble}>
						<div className={Style.BubbleInner}></div>
					</div>
					<div className={Style.Content}>
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
						contactIntersected ? `${Style.InputShow} ${Style.LastName}` : `${Style.Input} ${Style.LastName}`
					}>
					<div className={Style.Bubble}>
						<div className={Style.BubbleInner}></div>
					</div>
					<div className={Style.Content}>
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
						contactIntersected ? `${Style.InputShow} ${Style.Phone}` : `${Style.Input} ${Style.Phone}`
					}>
					<div className={Style.Bubble}>
						<div className={Style.BubbleInner}></div>
					</div>
					<div className={Style.Content}>
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
						contactIntersected ? `${Style.InputShow} ${Style.Email}` : `${Style.Input} ${Style.Email}`
					}>
					<div className={Style.Bubble}>
						<div className={Style.BubbleInner}></div>
					</div>
					<div className={Style.Content}>
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
						contactIntersected ? `${Style.InputShow} ${Style.Message}` : `${Style.Input} ${Style.Message}`
					}>
					<div className={Style.Bubble}>
						<div className={Style.BubbleInner}></div>
					</div>
					<div className={Style.Content}>
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
						contactIntersected ? `${Style.ButtonShow} ${Style.Submit}` : `${Style.Button} ${Style.Submit}`
					}
					onMouseEnter={() => setSubmitHover(true)}
					onMouseLeave={() => setSubmitHover(false)}>
					<div className={Style.Bubble}>
						<div className={Style.BubbleInner}></div>
					</div>
					<div className={Style.Content}>
						<ButtonRoundInverse size='small' direction='right' active={submitHover} section='Contact' />
						<h3>SEND</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
