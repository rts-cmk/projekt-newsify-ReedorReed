import { React, useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import AnimatedDetails from '../components/AnimatedDetails/AnimatedDetails';
import { getPopularViewed } from '../helpers/nyt-api';

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

		getPopularViewed(7).then((data) => setArticles(data.results));
	}, [firstRender]);

	console.log(articles);

	return (
		<div>
			Popular
			<Header />
			<AnimatedDetails title="Sport">
				{articles?.map((article) => {
					return (
						<article key={article.id}>
							<img
								src={article.media?.[0]['media-metadata'][0].url}
								alt={article.title}
							/>
							<h2>{article.title}</h2>
							<p>{article.abstract}</p>
						</article>
					);
				})}
			</AnimatedDetails>
			<NavBar />
		</div>
	);
}
