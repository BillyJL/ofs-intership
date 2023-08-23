import { withBreadcrumbsLayout } from 'components/layouts';
import './CategoryPage.scss';
import Filters from './components/Filters/Filters';

const CategoryPage = () => {
	return (
		<div className="category">
			<Filters />
		</div>
	);
};

export default withBreadcrumbsLayout(CategoryPage);
