import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { setupStore } from 'store/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore();
root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);
