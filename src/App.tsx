/* eslint-disable import/no-extraneous-dependencies */
import { Counter } from './features/counter/Counter';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="counter" element={<Counter />} />
					<Route path="counter" element={<Counter />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
