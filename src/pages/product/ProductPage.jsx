import { withBreadcrumbsLayout } from 'components/layouts';
import './ProductPage.scss';
import Product from './components/Product';

const ProductPage = () => {
	return (
		<>
			<div className='wrapper'>
				<Product />
			</div>
		</>
	)
}

export default withBreadcrumbsLayout(ProductPage);