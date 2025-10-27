// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import '@fontsource/playfair-display/700.css';
import '@fontsource/playfair-display/900.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';

createRoot(document.getElementById('root')).render(
	// <StrictMode>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	// </StrictMode>
);
