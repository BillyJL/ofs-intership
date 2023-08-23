import MainPage from 'pages/main/MainPage';
import NotFound from 'pages/NotFound/NotFound';
import CategoryPage from 'pages/category/CategoryPage';
import ProductPage from 'pages/product/ProductPage';

export const routes = [
	{
		path: '/',
		element: <MainPage />,
		breadcrumb: 'Home'
	},
	{
		path: '/category',
		element: <CategoryPage />,
		breadcrumb: 'Category Landing Services',
	},
	{
		path: '/product',
		element: <NotFound />,
		breadcrumb: 'OFS Theme',
	},
	{
		path: '/product/pr1',
		element: <ProductPage />,
		breadcrumb: 'Ruffle Front V-Neck Cardigan',
	},
	{
		path: '*',
		element: <NotFound />,
	},
];
