import MainPage from '@pages/main/MainPage.jsx';
import '@assets/styles/globals.scss';
import NotFound from '@pages/NotFound/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainPage />,
		},
		{
			path: '/404',
			element: <NotFound />,
			breadcrumb: "Custom Example"
		}
	]);
	return (
		<RouterProvider router={router} />
	);
};

export default App;
