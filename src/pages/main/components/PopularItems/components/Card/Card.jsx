import plusIcon from '@images/Plus.png';
import heartIcon from '@images/Heart.png';
import './Card.scss';
import { cartSlice } from 'store/reducers/CartSlice';
import { likedSlice } from 'store/reducers/LikedSlice';
import { useDispatch } from 'react-redux';

const Card = ({ name, price, img }) => {
	const { numOfProductIncrement } = cartSlice.actions;
	const { likedIncrement } = likedSlice.actions;
	const dispatch = useDispatch();
	return (
		<div className="card">
			<img className="card-image" src={img} alt="item image" />
			<h3 className="card-name">{name}</h3>
			<p className="card-price">{price}</p>
			<div className="card-gradient">
				<button
					onClick={() => dispatch(numOfProductIncrement(1))}
					className="card-gradient-button"
				>
					<img src={plusIcon} alt="Plus Icon" />
				</button>
				<button
					onClick={() => dispatch(likedIncrement(1))}
					className="card-gradient-button"
				>
					<img src={heartIcon} alt="Heart Icon" />
				</button>
			</div>
		</div>
	);
};

export default Card;
