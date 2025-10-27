import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import NavBar from '../components/NavBar/NavBar';
import '../style/_layout.sass';
import NewsSection from '../components/NewsSection/NewsSection';

export default function Home() {
	useEffect(() => {
		localStorage.setItem('hasLeftLogin', JSON.stringify(true));
	}, []);
	return (
		<section className="main-page">
			<Header />
			<SearchBar />
			<NewsSection title="Top Stories" section="home" delay={0} />
			<NewsSection title="Health" section="health" delay={13000} />
			<NewsSection title="Food" section="food" delay={26000} />
			<NewsSection title="Travel" section="travel" delay={39000} />
			<NavBar />
		</section>
	);
}
