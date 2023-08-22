import { createBrowserRouter } from 'react-router-dom';
import '@assets/styles/globals.scss';
import { RouterProvider } from 'react-router-dom';
import { routes } from '@config/routes';

const App = () => {
	const router = createBrowserRouter(routes);
	return (
		<RouterProvider router={router} />
	);
};

export default App;
