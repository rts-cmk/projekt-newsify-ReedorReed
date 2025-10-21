import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Archive from './pages/Archive';

function App() {
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route path="archive" element={<Archive />} />
			</Routes>
		</>
	);
}

export default App;
