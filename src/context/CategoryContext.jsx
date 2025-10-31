import React, { createContext, useContext, useState, useEffect } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
	const [categories, setCategories] = useState(() => {
		const saved = localStorage.getItem('categorySettings');
		return saved
			? JSON.parse(saved)
			: {
					home: true,
					health: true,
					food: true,
					travel: true
			  };
	});

	useEffect(() => {
		localStorage.setItem('categorySettings', JSON.stringify(categories));
	}, [categories]);

	const toggleCategory = (categoryKey) => {
		setCategories((prev) => ({
			...prev,
			[categoryKey]: !prev[categoryKey]
		}));
	};

	return (
		<CategoryContext.Provider value={{ categories, toggleCategory }}>
			{children}
		</CategoryContext.Provider>
	);
};

export const useCategories = () => {
	const context = useContext(CategoryContext);

	if (!context) {
		throw new Error('useCategories must be used within CategoryProvider');
	}
	return context;
};
