import { withBreadcrumbsLayout } from 'components/layouts';
import './CategoryPage.scss';
import Filters from './components/Filters';
import ItemsList from './components/ItemsList/ItemsList';
import LatestPosts from 'components/common/LatestPosts';

const CategoryPage = () => {
	return (
		<>
			<div className="category">
				<Filters />
				<h4 className="results-num">12,931 results in apparel</h4>
				<ItemsList />
			</div>
			<LatestPosts />
		</>
	);
};

export default withBreadcrumbsLayout(CategoryPage);
