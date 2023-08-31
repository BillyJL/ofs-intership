import cartItemImg from '@images/cart_item.png';
import './CartItem.scss';
import Counter from './components/Counter';
import deleteItem from '@images/delete_item.png';

const CartItem = () => {
	return (
		<div className="cart-item">
			<div className="cart-item-info">
				<img src={cartItemImg} alt="cart item" />
				<div className="label">
					<h2>Kristina Dam Oak Table With White Marble Top</h2>
					<span>$2.195</span>
				</div>
			</div>
			<div className="cart-item-functionality">
				<Counter />
				<span>$2.195</span>
				<button className="delete">
					<img src={deleteItem} />
				</button>
			</div>
		</div>
	);
};

export default CartItem;
