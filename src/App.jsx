import MainPage from '@pages/main/MainPage.jsx';
import '@assets/styles/globals.scss';
import { router } from 'config/router';
import { RouterProvider } from 'react-router-dom';

const App = () => {

	return (
		<RouterProvider router={router} />
	);
};

export default App;
