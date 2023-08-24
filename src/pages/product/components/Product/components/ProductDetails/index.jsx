import Icons from 'components/common/Icons';
import './ProductDetails.scss';
import DropdownImitation from './components/DropdownImitation';
import QuantityCounter from './components/QuantityCounter';
import ReadMoreText from './components/ReadMoreText';
import { clientConfig } from 'config/client';


const ProductDetails = () => {
	const {product: {text}} = clientConfig

	return (
		<div className="details">
			<h2 className="details-price">$ 299.99</h2>
			<div className="details-choose">
				<DropdownImitation />
				<QuantityCounter />
			</div>
			<ReadMoreText text={text} />
			<div className='details-social'>
				<span>Share</span>
				<Icons />
			</div>
		</div>
	);
};

export default ProductDetails;
