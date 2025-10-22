import { React, useEffect } from 'react';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';

export default function Settings() {
	useEffect(() => {
		localStorage.setItem('hasLeftLogin', JSON.stringify(true));
	}, []);
	return (
		<div>
			Settings
			<Header />
			<NavBar />
		</div>
	);
}
