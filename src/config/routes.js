import MainPage from 'pages/main/MainPage';
import NotFound from 'pages/NotFound/NotFound';
import CategoryPage from 'pages/category/CategoryPage';

export const routes = [
	{
		path: '/',
		element: <MainPage />,
		breadcrumb: 'Home'
	},
	{
		path: '/404',
		element: <NotFound />,
	},
	{
		path: '/category',
		element: <CategoryPage />,
		breadcrumb: 'Category Landing Services',
	},
];
