import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import NavBar from '../components/NavBar/NavBar';
import '../style/_layout.sass';
import NewsSection from '../components/NewsSection/NewsSection';
import { useCategories } from '../components/TurnOnOffCategories/CategoryContext';
import TurnOnOffCategories from '../components/TurnOnOffCategories/TurnOnOffCategories';

export default function Home() {
	useEffect(() => {
		localStorage.setItem('hasLeftLogin', JSON.stringify(true));
	}, []);

	const { categories } = useCategories();

	return (
		<section className="main-page">
			<Header />
			<SearchBar />

			{categories.home && <NewsSection title="Today" section="home" />}
			{categories.health && <NewsSection title="Health" section="health" />}
			{categories.food && <NewsSection title="Food" section="food" />}
			{categories.travel && <NewsSection title="Travel" section="travel" />}

			<NavBar />
		</section>
	);
}
