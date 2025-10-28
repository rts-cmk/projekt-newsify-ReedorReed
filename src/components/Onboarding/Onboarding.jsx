import React, { useState } from 'react';
import firstImage from '../assets/Onboarding-image1.png';
import secondImage from '../assets/Onboarding-image2.png';
import thirdImage from '../assets/Onboarding-image3.png';
import './Onboarding.sass';
import { useNavigate } from 'react-router';

export default function Onboarding({ onComplete }) {
	const navigate = useNavigate();

	const sliderData = [
		{
			imageUrl: firstImage,
			title: 'Stay Connected, Everywhere, Anytime',
			text: 'Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.'
		},
		{
			imageUrl: secondImage,
			title: 'Become a Savvy Global Citizen.',
			text: 'Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!'
		},
		{
			imageUrl: thirdImage,
			title: 'Enhance your News Journey Now!',
			text: 'Be part of our dynamic community and contribute your insights and participate in enriching conversations.'
		}
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	const completeOnboarding = () => {
		localStorage.setItem('completedOnboarding', JSON.stringify(true));
		onComplete();
		navigate('/login');
	};

	const nextSlide = () => {
		if (currentSlide === sliderData.length - 1) {
			completeOnboarding();
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};

	return (
		<>
			<section className="onboarding-screen">
				<article className="onboarding-screen__welcome">
					{sliderData.map((slide, index) => (
						<div
							key={index}
							className={`onboarding-screen__welcome-slide ${
								index === currentSlide ? 'active' : ''
							}`}>
							<div className="onboarding-screen__slide-content">
								<img
									src={slide.imageUrl}
									alt="phone and app image"
									className="onboarding-screen__image"
								/>
								<h2 className="onboarding-screen__title">{slide.title}</h2>
								<p className="onboarding-screen__text">{slide.text}</p>
							</div>
						</div>
					))}
				</article>

				<div className="dots">
					{sliderData.map((slide, index) => (
						<span
							key={index}
							className={`dots__dot ${
								index === currentSlide ? 'active-dot' : ''
							}`}
							onClick={() => setCurrentSlide(index)}></span>
					))}
				</div>

				<div className="button-container">
					<button
						className="button-container__skip"
						onClick={completeOnboarding}>
						Skip
					</button>
					<button className="button-container__continue" onClick={nextSlide}>
						Continue
					</button>
				</div>
			</section>
		</>
	);
}
