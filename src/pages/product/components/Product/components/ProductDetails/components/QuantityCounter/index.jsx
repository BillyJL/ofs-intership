import { useProductDetails } from 'hooks/useProductDetails';
import { cartSlice } from 'store/reducers/CartSlice';
import { useDispatch } from 'react-redux';
import Button from 'components/common/Button/Button';
import './QuantityCounter.scss';

const QuantityCounter = () => {
	const { quantity, handleQuantityChange, handleDecrement, handleIncrement } =
		useProductDetails();
	const { numOfProductIncrement } = cartSlice.actions;
	const dispatch = useDispatch();
	return (
		<div className="details-choose-buttons">
			<div className="quantity-counter">
				<button className="counter-btn" onClick={handleDecrement}>
					-
				</button>
				<input
					type="text"
					className="quantity-input"
					value={quantity}
					onChange={handleQuantityChange}
				/>
				<button className="counter-btn" onClick={handleIncrement}>
					+
				</button>
			</div>
			<Button
				onClick={() => dispatch(numOfProductIncrement(quantity))}
				text="Add to cart"
				className="add-to-cart"
			/>
		</div>
	);
};

export default QuantityCounter;
