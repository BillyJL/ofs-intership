import { useState } from 'react';

export function useProductDetails() {
	const [quantity, setQuantity] = useState(1);

	const handleQuantityChange = (e) => {
		const newQuantity = parseInt(e.target.value);
		if (!isNaN(newQuantity)) {
			setQuantity(newQuantity);
		}
	};

	const handleIncrement = () => {
		setQuantity(quantity + 1);
	};

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	return { quantity, handleQuantityChange, handleIncrement, handleDecrement };
}
