import image from '@images/Layer_152.png';
import './CardWithButton.scss';
import { cartSlice } from 'store/reducers/CartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const CardWithButton = () => {
	const { numOfProductIncrement } = cartSlice.actions;
	const dispatch = useDispatch();
	return (
		<div className="button-card">
			<div className="button-card-content">
				<Link to="/product/pr1" className='button-card-link'>
					<img
						className="button-card-image"
						src={image}
						alt="item image"
					/>
					<h3 className="button-card-name">
						Hay - About A Lounge Chair AAL 93
					</h3>
				</Link>
				<div className="multi-button">
					<Link to="/product/pr1"><span>$659.55</span></Link>
					<button onClick={() => dispatch(numOfProductIncrement(1))}>
						Buy now
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardWithButton;
