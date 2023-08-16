import img from '@images/popular-item.png';
import plusIcon from '@images/Plus.png';
import heartIcon from '@images/Heart.png';
import './Card.scss';

const Card = () => {
	return (
		<div className="card">
			<img className="card-image" src={img} alt="" />
			<h3 className="card-name">
				Kristina Dam Oak Table With White Marble Top
			</h3>
			<p className="card-price">$ 799.55</p>
			<div className='card-gradient'>
				<button className='card-gradient-button'>
					<img src={plusIcon} alt="Plus Icon" />
				</button>
				<button className='card-gradient-button'>
					<img src={heartIcon} alt="Heart Icon" />
				</button>
			</div>
		</div>
	);
};

export default Card;
