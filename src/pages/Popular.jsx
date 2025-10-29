import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import AnimatedDetails from '../components/AnimatedDetails/AnimatedDetails';
import { getPopularViewed } from '../helpers/nyt-api';
import '../style/_layout.sass';

export default function Popular() {
	useEffect(() => {
		localStorage.setItem('hasLeftLogin', JSON.stringify(true));
	}, []);

	const [articles, setArticles] = useState();
	const [firstRender, setFirstRender] = useState(true);

	useEffect(() => {
		if (!firstRender) {
			return;
		}

		setFirstRender(false);

		getPopularViewed().then((data) => setArticles(data.results));
	}, [firstRender]);

	//Function to filter articles by section
	function filterArticlesBySection(section) {
		return (
			articles
				?.filter(
					(article) => article.section?.toLowerCase() === section.toLowerCase()
				)
				.slice(0, 3) || []
		);
	}

	//Function to render articles
	function renderArticles(articleList) {
		return articleList.map((article) => (
			<article key={article.id} className="news-details">
				<figure className="news-details__thumbnail">
					<img
						src={article.media?.[0]?.['media-metadata']?.[0]?.url}
						alt={article.title}
					/>
				</figure>
				<div className="news-details__header">
					<h2 className="news-details__title">{article.title}</h2>
					<a href={article.url} className="news-details__link">
						<p className="news-details__text">{article.abstract}</p>
					</a>
				</div>
			</article>
		));
	}

	return (
		<section className="popular">
			<Header />
			<AnimatedDetails title="Today" name="news">
				{renderArticles(articles?.slice(0, 3) || [])}
			</AnimatedDetails>
			<AnimatedDetails title="Health" name="news">
				{renderArticles(filterArticlesBySection('health'))}
			</AnimatedDetails>
			<AnimatedDetails title="Sports" name="news">
				{renderArticles(filterArticlesBySection('sports'))}
			</AnimatedDetails>
			<AnimatedDetails title="World" name="news">
				{renderArticles(filterArticlesBySection('world'))}
			</AnimatedDetails>
			<NavBar />
		</section>
	);
}
