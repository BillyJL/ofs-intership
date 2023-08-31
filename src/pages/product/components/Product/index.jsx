import { clientConfig } from 'config/client';
import './Product.scss';
import ProductDetails from './components/ProductDetails';
import Tabs from './components/Tabs';
import PhotoGallery from './components/PhotoGallery';
import { useSelector } from 'react-redux';

const Product = () => {
	const { showingOtherStuff } = useSelector((state) => state.productReducer);
	const {
		product: { images },
	} = clientConfig;
	return (
		<div className="product">
			<div className="product-main">
				<PhotoGallery images={images} />
				<ProductDetails />
			</div>
			{showingOtherStuff && <Tabs />}
		</div>
	);
};

export default Product;
