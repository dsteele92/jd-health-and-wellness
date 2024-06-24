import { React, useState, forwardRef } from 'react';
import { Stack } from '@mantine/core';
import Style from './contact.module.scss';
import { useHasIntersected, SectionHeader, ButtonRoundInverse, GoogleMaps } from 'components';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = forwardRef((props, ref) => {
	const [contact, contactIntersected] = useHasIntersected({ threshold: 0.25 });
	const [maps, mapsIntersected] = useHasIntersected({ threshold: 0.25 });

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [submitHover, setSubmitHover] = useState(false);

	// Function to submit form data to your AWS Lambda function
	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = {
			data: {
				firstName,
				lastName,
				phone,
				email,
				message,
			},
			formType: 'Contact',
		};

		try {
			const response = await fetch('https://s4eyymdmr27o3uobyos62uduea0hlhhi.lambda-url.us-west-2.on.aws/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();
			if (response.ok) {
				console.log('Response Data:', data);
				alert('Form submitted successfully!'); // Show success message
			}
		} catch (error) {
			console.error('Failed to submit the form:', error);
			alert('Failed to submit the form.'); // Show error message
		}
	};

	return (
		<div className={Style.Contact} ref={ref}>
			<main>
				<Stack className={Style.InnerWrapper}>
					<div className={Style.AboutSubSection} ref={contact}>
						<SectionHeader top='Contact us' />
						<div className={Style[`Content${contactIntersected ? 'Show' : ''}`]}>
							<h2>Call us to schedule an appointment today.</h2>
							<a href='tel:5038771995'>
								<div className={Style.Call}>
									<div className={Style.PhoneIcon}>
										<FaPhoneAlt />
									</div>
									<h3>(503) 877-1995</h3>
								</div>
							</a>
						</div>
					</div>
				</Stack>
			</main>
			<div className={Style.Outer} ref={maps}>
				<div className={Style[`MapsContent${mapsIntersected ? 'Show' : ''}`]}>
					<GoogleMaps />
				</div>
				<section className={Style[`ContactContainer${mapsIntersected ? 'Show' : ''}`]}>
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
						<div className={Style.BubbleContent} onClick={handleSubmit}>
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
