import React from 'react';
import Logo from '../assets/newsify-logo.svg';
import './Header.sass';

export default function Header() {
	return (
		<header className="header">
			<img src={Logo} alt="Newsify logo" className="header__logo" />
			<h1 className="header__title">Newsify</h1>
		</header>
	);
}
