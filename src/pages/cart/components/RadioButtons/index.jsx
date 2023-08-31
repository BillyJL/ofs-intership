import { useState } from 'react';
import './RadioButtons.scss';

const RadioButtons = () => {
	const [delivery, setDelivery] = useState(null);

	const onOptionChange = (e) => {
		setDelivery(e.target.value);
	};
	return (
		<fieldset>
			<div className="radio-button">
				<input
					type="radio"
					value="FLAT_RATE"
					checked={delivery === 'FLAT_RATE'}
					onChange={onOptionChange}
				/>
				<label>Flat Rate</label>
			</div>
			<div className="radio-button">
				<input
					type="radio"
					value="FREE_SHIPPING"
					checked={delivery === 'FREE_SHIPPING'}
					onChange={onOptionChange}
				/>
				<label>Free Shipping</label>
			</div>
			<div className="radio-button">
				<input
					type="radio"
					value="INTERNATIONAL"
					checked={delivery === 'INTERNATIONAL'}
					onChange={onOptionChange}
				/>
				<label>International</label>
			</div>
			<div className="radio-button">
				<input
					type="radio"
					value="LOCAL_DELIVERY"
					checked={delivery === 'LOCAL_DELIVERY'}
					onChange={onOptionChange}
				/>
				<label>Local Delivery</label>
			</div>
			<div className="radio-button">
				<input
					type="radio"
					value="LOCAL_PICKUP"
					checked={delivery === 'LOCAL_PICKUP'}
					onChange={onOptionChange}
				/>
				<label>Local Pickup (Free)</label>
			</div>
		</fieldset>
	);
};

export default RadioButtons;
