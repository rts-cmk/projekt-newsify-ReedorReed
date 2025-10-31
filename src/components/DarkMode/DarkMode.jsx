import React from 'react';
import './DarkMode.sass';

export default function DarkMode() {
	let clickedClass = 'clicked';
	const body = document.body;
	const lightTheme = 'light';
	const darkTheme = 'dark';
	let theme;

	if (localStorage) {
		theme = localStorage.getItem('theme');
	}

	if (theme === lightTheme || theme === darkTheme) {
		body.classList.add(theme);
	} else {
		body.classList.add(lightTheme);
	}

	const switchTheme = (event) => {
		if (theme === darkTheme) {
			body.classList.replace(darkTheme, lightTheme);
			event.target.classList.remove(clickedClass);
			localStorage.setItem('theme', 'light');
			theme = lightTheme;
		} else {
			body.classList.replace(lightTheme, darkTheme);
			event.target.classList.add(clickedClass);
			localStorage.setItem('theme', 'dark');
			theme = darkTheme;
		}
	};

	return (
		<div className="darkmode">
			<button
				className={theme === 'dark' ? clickedClass : ''}
				id="darkMode"
				onClick={switchTheme}>
				Toggle dark mode
			</button>
		</div>
	);
}
