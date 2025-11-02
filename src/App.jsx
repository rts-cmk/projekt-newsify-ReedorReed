import { Routes, Route, Navigate } from 'react-router';
import Home from './pages/Home';
import Archive from './pages/Archive';
import Popular from './pages/Popular';
import Settings from './pages/Settings';
import Login from './pages/Login';
import './style/main.sass';
import { useEffect, useState } from 'react';
import SplashScreen from './components/Splash/Splash';
import Onboarding from './components/Onboarding/Onboarding';
import React from 'react';

function App() {
	const hasCompletedOnboarding = JSON.parse(
		localStorage.getItem('completedOnboarding') || 'false'
	);

	const hasLeftLogin = JSON.parse(
		localStorage.getItem('hasLeftLogin') || 'false'
	);

	const [showSplashscreen, setShowSplashscreen] = useState(!hasLeftLogin);
	const [showOnboarding, setShowOnboarding] = useState(false);

	useEffect(() => {
		// Only show splash screen if user hasn't left login page yet
		if (!hasLeftLogin) {
			const timer = setTimeout(() => {
				setShowSplashscreen(false);
				// After splash, check if we need to show onboarding
				if (!hasCompletedOnboarding) {
					setShowOnboarding(true);
				}
			}, 3500);

			// Cleanup timer on unmount
			return () => clearTimeout(timer);
		}
	}, [hasCompletedOnboarding, hasLeftLogin]);

	// Show splash screen first (only if user hasn't left login)
	if (showSplashscreen) {
		return <SplashScreen />;
	}

	// After splash, show onboarding if not completed
	if (showOnboarding) {
		return <Onboarding onComplete={() => setShowOnboarding(false)} />;
	}

	return (
		<Routes>
			<Route index element={<Navigate to="/login" replace />} />
			<Route path="home" element={<Home />} />
			<Route path="login" element={<Login />} />
			<Route path="archive" element={<Archive />} />
			<Route path="popular" element={<Popular />} />
			<Route path="settings" element={<Settings />} />
		</Routes>
	);
}

export default App;
