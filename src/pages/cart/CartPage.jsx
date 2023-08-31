import { withBreadcrumbsLayout } from 'components/layouts';
import './CartPage.scss';
import Button from 'components/common/Button';
import RadioButtons from './components/RadioButtons';
import CartItem from './components/CartItem';
import { useCart } from 'hooks/useCart';

const CartPage = () => {
	const {
		cartItems,
		deliveryCost,
		setDeliveryCost,
		calculateTotalPrice,
		changeQuantity,
		deleteCartItem,
	} = useCart();

	return (
		<div className="cart">
			<ul className="cart-items">
				{cartItems.map((item, index) => (
					<CartItem
						key={index}
						index={index}
						{...item}
						deleteCartItem={deleteCartItem}
						changeQuantity={changeQuantity}
					/>
				))}
			</ul>
			<hr />
			<div className="cart-options">
				<form className="coupon div1">
					<input
						className="coupon-input"
						placeholder="Enter Coupon Code"
					/>
					<Button className="coupon-button" text="apply" />
				</form>
				<div className="buttons div2">
					<Button className="update" text="Update cart" />
					<Button className="proceed" text="Proceed to Checkout" />
				</div>
				<div className="total-calculation div3">
					<h4>cart subtotal:</h4>
					<span>${calculateTotalPrice()}</span>
					<h3>SHIPPING AND HANDLING:</h3>
					<RadioButtons setCost={setDeliveryCost} />
					<h3>Order Total:</h3>
					<span>${calculateTotalPrice() + deliveryCost}</span>
				</div>
			</div>
		</div>
	);
};

export default withBreadcrumbsLayout(CartPage);
