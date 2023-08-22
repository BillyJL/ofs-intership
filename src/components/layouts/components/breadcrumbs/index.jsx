import { Layout, createLayoutHoc } from '../common';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';

const BreadcrumbsLayout = ({ children }) => {
	return (
		<Layout>
			<Breadcrumbs />
			{children}
		</Layout>
	);
};

export const withBreadcrumbsLayout = createLayoutHoc(BreadcrumbsLayout);
