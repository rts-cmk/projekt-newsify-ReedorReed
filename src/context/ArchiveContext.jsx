import React, { createContext, useContext, useState, useEffect } from 'react';

const ArchiveContext = createContext();

export const ArchiveProvider = ({ children }) => {
	const [archivedArticles, setArchivedArticles] = useState(() => {
		const saved = localStorage.getItem('archivedArticles');
		return saved ? JSON.parse(saved) : [];
	});

	useEffect(() => {
		localStorage.setItem('archivedArticles', JSON.stringify(archivedArticles));
	}, [archivedArticles]);

	const addToArchive = (article) => {
		setArchivedArticles((prev) => {
			//See if article is already archived
			if (prev.some((a) => a.uri === article.uri)) {
				return prev;
			}
			return [...prev, { ...article, archivedAt: Date.now() }];
		});
	};

	const removeFromArchive = (articleUri) => {
		setArchivedArticles((prev) => prev.filter((a) => a.uri !== articleUri));
	};

	const isArchived = (articleUri) => {
		return archivedArticles.some((a) => a.uri === articleUri);
	};

	return (
		<ArchiveContext.Provider
			value={{ archivedArticles, addToArchive, removeFromArchive, isArchived }}>
			{children}
		</ArchiveContext.Provider>
	);
};

export const useArchive = () => {
	const context = useContext(ArchiveContext);
	if (!context) {
		throw new Error('useArchive must be used within an ArchiveProvider');
	}
	return context;
};
