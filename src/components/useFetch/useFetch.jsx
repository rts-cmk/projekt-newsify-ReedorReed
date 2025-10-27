import { useEffect, useState } from 'react';

const useFetch = (url, delay = 0) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			fetch(url)
				.then((response) => {
					if (!response.ok) {
						throw Error('could not fetch data');
					}
					return response.json();
				})
				.then((data) => {
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
	}, [url, delay]);

	return { data, isPending, error };
};

export default useFetch;
