import React from 'react';
import AnimatedDetails from '../AnimatedDetails/AnimatedDetails';
import useFetch from '../useFetch/useFetch';
import SwipeableArticle from '../SwipeableArticle/SwipeableArticle';
import { useArchive } from '../../context/ArchiveContext';

export default function NewsSection({ title, section, delay = 0 }) {
	const API_KEY = import.meta.env.VITE_API_KEY;
	const ONE_HOUR = 60 * 60 * 1000; // hours in milliseconds
	const { addToArchive } = useArchive();

	const { data, isPending, error } = useFetch(
		`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`,
		delay,
		ONE_HOUR // Cache for 1 hour
	);

	return (
		<AnimatedDetails title={title} name="news">
			{isPending && <p>Loading {title}...</p>}
			{error && <p>Error loading {title}</p>}
			{!isPending &&
				!error &&
				data?.results
					?.slice(0, 3)
					.map((newsData) => (
						<SwipeableArticle
							key={newsData.uri}
							newsData={newsData}
							onArchive={() => addToArchive(newsData)}
							isArchivePage={false}
						/>
					))}
		</AnimatedDetails>
	);
}
