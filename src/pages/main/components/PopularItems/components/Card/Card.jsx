import img from '@images/popular-item.png';
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
				<button className='card-gradient-button'>+</button>
				<button className='card-gradient-button'>&#9829;</button>
			</div>
		</div>
	);
};

export default Card;
