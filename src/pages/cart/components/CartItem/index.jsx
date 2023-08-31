import cartItemImg from '@images/cart_item.png';
import './CartItem.scss';
import Counter from './components/Counter';
import deleteItem from '@images/delete_item.png';

const CartItem = ({ index, name, price, quantity, deleteCartItem, changeQuantity }) => {
	return (
		<div className="cart-item">
			<div className="cart-item-info">
				<img src={cartItemImg} alt="cart item" />
				<div className="label">
					<h2>{name}</h2>
					<span>{'$' + price}</span>
				</div>
			</div>
			<div className="cart-item-functionality">
				<Counter index={index} value={quantity} onChange={changeQuantity} />
				<span>{'$' + price * quantity}</span>
				<button
					className="delete"
					onClick={() => deleteCartItem(index)}
				>
					<img src={deleteItem} />
				</button>
			</div>
		</div>
	);
};

export default CartItem;
