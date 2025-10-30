import React from 'react';
import './SearchBar.sass';

export default function SearchBar() {
	return (
		<>
			<search className="search-bar">
				<form action="./search/">
					<input
						type="search"
						name="q"
						id="search-news"
						placeholder="Search news"
						className="search-bar__input"
					/>
				</form>
			</search>
		</>
	);
}
