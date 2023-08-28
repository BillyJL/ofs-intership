import { clientConfig } from 'config/client';
import './Product.scss';
import ProductDetails from './components/ProductDetails';
import Tabs from './components/Tabs';
import PhotoGallery from './components/PhotoGallery';

const Product = () => {
	const {
		product: { images },
	} = clientConfig;
	return (
		<div className="product">
			<div className="product-main">
				<PhotoGallery images={images} />
				<ProductDetails />
			</div>
			<Tabs />
		</div>
	);
};

export default Product;
