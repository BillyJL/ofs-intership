import { createBrowserRouter } from 'react-router-dom';
import MainPage from 'pages/main/MainPage';
import NotFound from 'pages/NotFound/NotFound';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/404',
		element: <NotFound />,
		breadcrumb: 'Custom Example',
	},
]);
