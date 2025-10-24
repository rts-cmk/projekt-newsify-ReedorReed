import { useEffect, useState } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() => {
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
					setIsPending(false);
					setError(err.message);
				});
		}, 1000);
	}, [url]);
};
export default useFetch;
