import { useEffect, useState } from 'react';

const useFetch = (url, delay = 0, cacheTime = 3600000) => {
	// 1 hour cache
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const cacheKey = `cache_${url}`;
		const timestampKey = `timestamp_${url}`;

		// Check if there is cached data
		const cachedData = localStorage.getItem(cacheKey);
		const cachedTimestamp = localStorage.getItem(timestampKey);
		const now = Date.now();

		// If cache exists, use it
		if (cachedData && cachedTimestamp) {
			const age = now - parseInt(cachedTimestamp);
			if (age < cacheTime) {
				console.log(
					`Using cached data for ${url} (${Math.round(
						age / 60000
					)} minutes old)`
				);
				setData(JSON.parse(cachedData));
				setIsPending(false);
				return;
			}
		}

		// Else, fetch new data with delay so API limit isn't hit too quickly
		const timer = setTimeout(() => {
			console.log(`Fetching fresh data for ${url}`);
			fetch(url)
				.then((response) => {
					if (!response.ok) {
						throw Error('could not fetch data');
					}
					return response.json();
				})
				.then((data) => {
					// Save to localStorage
					localStorage.setItem(cacheKey, JSON.stringify(data));
					localStorage.setItem(timestampKey, now.toString());
					setData(data);
					setIsPending(false);
					setError(null);
				})
				.catch((err) => {
					console.log(err.message);
					setIsPending(false);
					setError(err.message);
				});
		}, delay);

		return () => clearTimeout(timer);
	}, [url, delay, cacheTime]);

	return { data, isPending, error };
};

export default useFetch;
