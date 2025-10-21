import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Archive from './pages/Archive';
import Popular from './pages/Popular';
import Settings from './pages/Settings';
import './style/main.sass';

function App() {
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route path="archive" element={<Archive />} />
				<Route path="popular" element={<Popular />} />
				<Route path="settings" element={<Settings />} />
			</Routes>
		</>
	);
}

export default App;
