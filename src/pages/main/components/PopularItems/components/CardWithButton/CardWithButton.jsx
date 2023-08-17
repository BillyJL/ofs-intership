import image from '@images/Layer_152.png';
import './CardWithButton.scss';

const CardWithButton = () => {
	return (
		<div className="button-card">
			<div className="button-card-content">
				<img className="button-card-image" src={image} alt="item image" />
				<h3 className="button-card-name">Hay - About A Lounge Chair AAL 93</h3>
				<div className='multi-button'>
					<span>$659.55</span>
					<button>Buy now</button>
				</div>
			</div>
		</div>
	);
};

export default CardWithButton;