/* eslint-disable import/no-extraneous-dependencies */
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>
);
