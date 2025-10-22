import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import NavBar from '../components/NavBar/NavBar';

export default function Home() {
	useEffect(() => {
		localStorage.setItem('hasLeftLogin', JSON.stringify(true));
	}, []);
	return (
		<section className="main-page">
			<Header />
			<SearchBar />
			<NavBar />
		</section>
	);
}
