import './Counter.scss';

const Counter = () => {
	return (
		<div className="counter">
			<button className="counter-btn">
				-
			</button>
			<input
				type="text"
				className="counter-input"
				// value={}
				// onChange={}
			/>
			<button className="counter-btn">
				+
			</button>
		</div>
	);
};

export default Counter;
