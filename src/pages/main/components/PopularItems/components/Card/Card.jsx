import plusIcon from '@images/Plus.png';
import heartIcon from '@images/Heart.png';
import './Card.scss';

const Card = ({ name, price, img }) => {
	return (
		<div className="card">
			<img className="card-image" src={img} alt="item image" />
			<h3 className="card-name">{name}</h3>
			<p className="card-price">{price}</p>
			<div className="card-gradient">
				<button className="card-gradient-button">
					<img src={plusIcon} alt="Plus Icon" />
				</button>
				<button className="card-gradient-button">
					<img src={heartIcon} alt="Heart Icon" />
				</button>
			</div>
		</div>
	);
};

export default Card;
