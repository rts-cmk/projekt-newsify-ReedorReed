import React from 'react';
import Logo from '../assets/newsify-logo.svg';
import './Splash.sass';

export default function Splash() {
	return (
		<div className="splash">
			<img src={Logo} alt="Newsify logo" className="splash__logo" />
			<h1 className="splash__title">Newsify</h1>
		</div>
	);
}
