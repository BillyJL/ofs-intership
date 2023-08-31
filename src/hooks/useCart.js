import { useState } from 'react';

export const useCart = () => {
	const [cartItems, setCartItems] = useState([
		{
			name: 'Kristina Dam Oak Table With White Marble Top',
			price: 2195,
			quantity: 1,
		},
		{
			name: 'Activate Facial Mask and Charcoal Soap',
			price: 1249,
			quantity: 1,
		},
	]);
	const [deliveryCost, setDeliveryCost] = useState(0);

	const changeQuantity = (index, newQuantity) => {
		const updatedCartItems = [...cartItems];
		updatedCartItems[index].quantity = newQuantity;
		setCartItems(updatedCartItems);
	};

	const deleteCartItem = (index) => {
		const updatedCartItems = cartItems.filter((_, i) => i !== index);
		setCartItems(updatedCartItems);
	};

	const calculateTotalPrice = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0,
		);
	};

	return {
		cartItems,
		deliveryCost,
		setDeliveryCost,
		changeQuantity,
		deleteCartItem,
		calculateTotalPrice,
	};
};
