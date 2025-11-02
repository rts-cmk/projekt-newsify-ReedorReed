const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.nytimes.com/svc/';

async function fetchData(base, endpoint) {
	const url = new URL(endpoint, base);

	url.searchParams.set('api-key', API_KEY);

	const response = await fetch(url);
	const data = await response.json();

	return data;
}

async function getPopularViewed(days = 1) {
	return fetchData(BASE_URL, `mostpopular/v2/viewed/${days}.json`);
}

export { getPopularViewed };

async function getHealthStories(section) {
	return fetchData(BASE_URL, `topstories/v2/${section}.json`);
}

export { getHealthStories };

async function getFoodStories(section) {
	return fetchData(BASE_URL, `topstories/v2/${section}.json`);
}
export { getFoodStories };

async function getTravelStories(section) {
	return fetchData(BASE_URL, `topstories/v2/${section}.json`);
}

export { getTravelStories };
