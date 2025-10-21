import React from 'react';
import firstImage from '../assets/Onboarding-image1.png';

export default function Onboarding() {
	return (
		<section className="onboarding-screen">
			<article>
				<img
					src={firstImage}
					alt="phone app"
					className="onboarding-screen__image"
				/>
				<h1 className="onboarding-screen__title">
					Stay Connected, Everywhere, Anytime
				</h1>
				<p>
					Welcome to Newsify, your ultimate destination for breaking news,
					exclusive stories, and tailored content.
				</p>
			</article>
			<div className="dots">
				<span className="dots__dot"></span>
				<span className="dots__dot"></span>
				<span className="dots__dot"></span>
			</div>
			<div className="button-container">
				<button className="button-container__skip">Skip</button>
				<button className="button-container__continue">Continue</button>
			</div>
		</section>
	);
}
