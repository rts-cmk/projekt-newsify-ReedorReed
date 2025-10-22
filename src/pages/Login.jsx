import React, { useEffect } from 'react';
import Logo from '../assets/newsify-logo.svg';
import '../style/_layout.sass';
import { useNavigate } from 'react-router';

export default function Login() {
	// Only show splash screen if user is on login page
	useEffect(() => {
		localStorage.setItem('hasLeftLogin', JSON.stringify(false));
	}, []);

	const navigate = useNavigate();

	function navigateLogin() {
		navigate('/home');
	}
	return (
		<section className="login-page">
			<img src={Logo} alt="Newsify logo" className="login-page__logo" />
			<h1 className="login-page__title">Newsify</h1>
			<p className="login-page__subtitle">
				Welcome! Let’s dive into your account!
			</p>
			<div className="buttons">
				<button className="buttons__button" onClick={navigateLogin}>
					Continue with Facebook
				</button>
				<button className="buttons__button" onClick={navigateLogin}>
					Continue with Google
				</button>
			</div>

			<div className="line-break">
				<span className="line-break__line"></span>
				<p className="line-break__text">or</p>
				<span className="line-break__line"></span>
			</div>

			<button className="login-page__sign-in-button" onClick={navigateLogin}>
				Sign in with password
			</button>
			<p className="login-page__sign-up-text">
				Don’t have an account?{' '}
				<a href="#" className="login-page__sign-up-link">
					Sign up
				</a>
			</p>
		</section>
	);
}
