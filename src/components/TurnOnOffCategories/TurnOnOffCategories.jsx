import React, { Component } from 'react';
import { useCategories } from '../../context/CategoryContext';
import Logo from '../assets/newsify-logo.svg';
import './TurnOnOffCategories.sass';

const TurnOnOffCategories = () => {
	const { categories, toggleCategory } = useCategories();

	const categoryList = [
		{ key: 'home', label: 'Today' },
		{ key: 'health', label: 'Health' },
		{ key: 'food', label: 'Food' },
		{ key: 'travel', label: 'Travel' }
	];

	return (
		<>
			<div className="category-settings">
				{categoryList.map((category) => (
					<div key={category.key} className="category-settings__toggle-item">
						<figure className="category-settings__info">
							<img src={Logo} className="category-settings__icon" />
							<figcaption>
								<h2 className="category-settings__label">{category.label}</h2>
							</figcaption>
						</figure>

						<button
							onClick={() => toggleCategory(category.key)}
							className={`toggle-switch ${
								categories[category.key] ? 'active' : ''
							}`}>
							<span className="toggle-slider" />
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default TurnOnOffCategories;
