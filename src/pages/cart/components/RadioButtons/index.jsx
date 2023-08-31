import { useState } from 'react';
import './RadioButtons.scss';

const RadioButtons = ({ setCost }) => {
	const [delivery, setDelivery] = useState(null);

	const onOptionChange = (amount) => (e) => {
		setDelivery(e.target.value);
		setCost(amount);
	};
	return (
		<fieldset>
			<div className="radio-button">
				<input
					type="radio"
					value="FLAT_RATE"
					checked={delivery === 'FLAT_RATE'}
					onChange={onOptionChange(10)}
				/>
				<label>Flat Rate <b>$10</b></label>
			</div>
			<div className="radio-button">
				<input
					type="radio"
					value="FREE_SHIPPING"
					checked={delivery === 'FREE_SHIPPING'}
					onChange={onOptionChange(0)}
				/>
				<label>Free Shipping</label>
			</div>
			<div className="radio-button">
				<input
					type="radio"
					value="INTERNATIONAL"
					checked={delivery === 'INTERNATIONAL'}
					onChange={onOptionChange(60)}
				/>
				<label>International <b>$60</b></label>
			</div>
			<div className="radio-button">
				<input
					type="radio"
					value="LOCAL_DELIVERY"
					checked={delivery === 'LOCAL_DELIVERY'}
					onChange={onOptionChange(5)}
				/>
				<label>Local Delivery <b>$5</b></label>
			</div>
			<div className="radio-button">
				<input
					type="radio"
					value="LOCAL_PICKUP"
					checked={delivery === 'LOCAL_PICKUP'}
					onChange={onOptionChange(0)}
				/>
				<label>Local Pickup (Free)</label>
			</div>
		</fieldset>
	);
};

export default RadioButtons;
