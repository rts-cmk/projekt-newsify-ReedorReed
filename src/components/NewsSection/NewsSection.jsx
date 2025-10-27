import React from 'react';
import AnimatedDetails from '../AnimatedDetails/AnimatedDetails';
import useFetch from '../useFetch/useFetch';

export default function NewsSection({ title, section, delay = 0 }) {
	const API_KEY = import.meta.env.VITE_API_KEY;
	const { data, isPending, error } = useFetch(
		`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`,
		delay
	);

	return (
		<AnimatedDetails title={title} name="news">
			{isPending && <p>Loading {title}...</p>}
			{error && <p>Error loading {title}</p>}
			{!isPending &&
				!error &&
				data?.results?.slice(0, 3).map((newsData) => {
					const imageUrl = newsData.multimedia?.[2]?.url;
					return (
						<article key={newsData.uri} className="news-details">
							<figure className="news-details__thumbnail">
								<img src={imageUrl} alt={newsData.title} />
							</figure>
							<div className="news-details__header">
								<h2 className="news-details__title">{newsData.title}</h2>
								<a href={newsData.url} className="news-details__link">
									<p className="news-details__text">{newsData.abstract}</p>
								</a>
							</div>
						</article>
					);
				})}
		</AnimatedDetails>
	);
}
