import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import DarkMode from '../components/DarkMode/DarkMode';
import '../style/_layout.sass';
import AnimatedDetails from '../components/AnimatedDetails/AnimatedDetails';
import TurnOnOffCategories from '../components/TurnOnOffCategories/TurnOnOffCategories';

export default function Settings() {
	useEffect(() => {
		localStorage.setItem('hasLeftLogin', JSON.stringify(true));
	}, []);
	return (
		<section className="settings">
			<Header />
			<h2 className="settings__title">Settings</h2>
			<h2 className="settings__subtitle">Categories</h2>
			<TurnOnOffCategories />
			<DarkMode />
			<NavBar />
		</section>
	);
}
