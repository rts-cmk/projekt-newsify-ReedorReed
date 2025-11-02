import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './SwipeableArticle.sass';
import deleteIcon from '../../assets/delete-icon.svg';
import archiveIcon from '../../assets/bookmark-icon.svg';

const SwipeableArticle = ({
	newsData,
	onArchive,
	onDelete,
	isArchivePage = false
}) => {
	const [swipeOffset, setSwipeOffset] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const swipeThreshold = 100; // Minimum swipe distance to trigger action
	const maxSwipe = 200; // Maximum swipe distance for visual effect

	const handlers = useSwipeable({
		onSwiping: (eventData) => {
			//Only allow left swipe
			if (eventData.deltaX < 0) {
				const offset = Math.min(eventData.deltaX, -maxSwipe);
				setSwipeOffset(offset);
			}
		},
		onSwiped: (eventData) => {
			if (eventData.deltaX < -swipeThreshold) {
				//Succesful swipe, animate
				setIsAnimating(true);
				setSwipeOffset(-500);

				setTimeout(() => {
					if (isArchivePage && onDelete) {
						onDelete();
					} else if (!isArchivePage && onArchive) {
						onArchive();
					}
					setSwipeOffset(0);
					setIsAnimating(false);
				}, 300);
			} else {
				setSwipeOffset(0);
			}
		},
		trackMouse: false,
		trackTouch: true,
		delta: 10,
		preventScrollOnSwipe: false
	});

	const imageUrl = newsData.multimedia?.[2]?.url;
	const backgroundOpacity = Math.min(Math.abs(swipeOffset) / swipeThreshold, 1);

	return (
		<div className="swipeable-container">
			<div
				className={`swipeable-container__swipe-background ${
					isArchivePage
						? 'swipeable-container__swipe-action--delete'
						: 'swipeable-container__swipe-action--archive'
				}`}
				style={{ opacity: backgroundOpacity }}>
				<figure className="swipeable-container__swipe-action">
					<img
						src={isArchivePage ? deleteIcon : archiveIcon}
						alt={isArchivePage ? 'delete icon' : 'archive icon'}
						className="swipeable-container__swipe-icon"
					/>
				</figure>
			</div>

			{/* Article card */}
			<article
				{...handlers}
				className="news-details-swipe__swipeable"
				style={{
					transform: `translateX(${swipeOffset}px)`,
					transition:
						swipeOffset === 0 || isAnimating
							? 'transform 0.3s ease-out'
							: 'none'
				}}>
				<figure className="news-details-swipe__thumbnail">
					<img src={imageUrl} alt={newsData.title} />
				</figure>
				<div className="news-details-swipe__header">
					<a
						href={newsData.url}
						className="news-details-swipe__link"
						target="_blank"
						rel="noopener noreferrer">
						<h2 className="news-details-swipe__title">{newsData.title}</h2>
						<p className="news-details-swipe__text">{newsData.abstract}</p>
					</a>
				</div>
			</article>
		</div>
	);
};

export default SwipeableArticle;
