import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import SwipeableArticle from '../components/SwipeableArticle/SwipeableArticle';
import { useArchive } from '../context/ArchiveContext';
import '../style/_layout.sass';
import NYTCredit from '../components/NYTCredit/NYTCredit';

export default function Archive() {
	const { archivedArticles, removeFromArchive } = useArchive();

	useEffect(() => {
		localStorage.setItem('hasLeftLogin', JSON.stringify(true));
	}, []);

	return (
		<section className="archive-page">
			<Header />

			{archivedArticles.length === 0 ? (
				<div className="empty-state">
					<p className="empty-message">No archived articles yet</p>
					<p className="empty-hint">
						Swipe right on articles to save them here
					</p>
				</div>
			) : (
				<div className="archived-articles">
					{archivedArticles.map((newsData) => (
						<SwipeableArticle
							key={newsData.uri}
							newsData={newsData}
							onDelete={() => removeFromArchive(newsData.uri)}
							isArchivePage={true}
						/>
					))}
				</div>
			)}
			<NYTCredit />
			<NavBar />
		</section>
	);
}
