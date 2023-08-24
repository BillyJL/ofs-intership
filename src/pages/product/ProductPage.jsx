import { withBreadcrumbsLayout } from 'components/layouts';
import './ProductPage.scss';
import Product from './components/Product';
import PopularItems from './components/PopularItems';
import Services from 'components/common/Services';

const ProductPage = () => {
	return (
		<>
			<div className='wrapper'>
				<Product />
				<PopularItems />
			</div>
			<Services />
		</>
	)
}

export default withBreadcrumbsLayout(ProductPage);