import './Counter.scss';

const Counter = ({ index, value, onChange }) => {
	const handleIncrement = () => {
		onChange(index, value + 1);
	};
	const handleDecrement = () => {
		if (value > 1) {
			onChange(index, value - 1);
		}
	};
	const handleInputChange = (event) => {
		const newValue = parseInt(event.target.value);
		if (!isNaN(newValue)) {
			onChange(index, newValue);
		}
	};
	return (
		<div className="counter">
			<button className="counter-btn" onClick={handleDecrement}>
				-
			</button>
			<input
				type="text"
				className="counter-input"
				value={value}
				onChange={handleInputChange}
			/>
			<button className="counter-btn" onClick={handleIncrement}>
				+
			</button>
		</div>
	);
};

export default Counter;
