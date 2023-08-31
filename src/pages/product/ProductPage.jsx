import { withBreadcrumbsLayout } from 'components/layouts';
import './ProductPage.scss';
import Product from './components/Product';
import PopularItems from './components/PopularItems';
import Services from 'components/common/Services';
import { useSelector } from 'react-redux';

const ProductPage = () => {
	const { showingOtherStuff } = useSelector((state) => state.productReducer);
	return (
		<>
			<div className={'wrapper ' + (!showingOtherStuff && 'wrapper-hide-other')}>
				<Product />
				{showingOtherStuff && <PopularItems />}
			</div>
			{showingOtherStuff && <Services />}
		</>
	)
}

export default withBreadcrumbsLayout(ProductPage);