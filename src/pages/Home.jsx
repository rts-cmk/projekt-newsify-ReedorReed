import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import NavBar from '../components/NavBar/NavBar';
import AnimatedDetails from '../components/AnimatedDetails/AnimatedDetails';
import '../style/_layout.sass';

export default function Home() {
	useEffect(() => {
		localStorage.setItem('hasLeftLogin', JSON.stringify(true));
	}, []);
	return (
		<section className="main-page">
			<Header />
			<SearchBar />
			<AnimatedDetails title="Health" name="news">
				<>
					<h2>Health</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quam
						possimus id molestias ipsa eaque blanditiis voluptatum quaerat,
						voluptate porro delectus laudantium, magni, unde ipsam. Vero maiores
						autem eaque magni.
					</p>
				</>
			</AnimatedDetails>
			<AnimatedDetails title="Sport" name="news">
				<>
					<h1>Sport</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quam
						possimus id molestias ipsa eaque blanditiis voluptatum quaerat,
						voluptate porro delectus laudantium, magni, unde ipsam. Vero maiores
						autem eaque magni.
					</p>
				</>
			</AnimatedDetails>
			<AnimatedDetails title="Travel" name="news">
				<>
					<h1>Travel</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quam
						possimus id molestias ipsa eaque blanditiis voluptatum quaerat,
						voluptate porro delectus laudantium, magni, unde ipsam. Vero maiores
						autem eaque magni.
					</p>
				</>
			</AnimatedDetails>
			<NavBar />
		</section>
	);
}
