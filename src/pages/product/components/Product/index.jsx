import ImageGallery from 'react-image-gallery';
import { clientConfig } from 'config/client';
import './Product.scss';
import ProductDetails from './components/ProductDetails';
import Tabs from './components/Tabs';

const Product = () => {
	const {
		product: { images },
	} = clientConfig;
	return (
		<div className="product">
			<div className="product-main">
				<ImageGallery
					items={images}
					thumbnailPosition="right"
					infinite={false}
					useBrowserFullscreen={false}
					showPlayButton={false}
					disableThumbnailScroll={true}
					disableKeyDown={true}
					showNav={false}
				/>
				<ProductDetails />
			</div>
			<Tabs />
		</div>
	);
};

export default Product;
