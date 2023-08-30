import MainPage from '@pages/main/MainPage';
import CategoryPage from '@pages/category/CategoryPage';
import ProductPage from '@pages/product/ProductPage';
import NotFoundPage from '@pages/notFound/NotFoundPage';

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
		element: <NotFoundPage />,
		breadcrumb: 'OFS Theme',
	},
	{
		path: '/product/pr1',
		element: <ProductPage />,
		breadcrumb: 'Ruffle Front V-Neck Cardigan',
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
];
