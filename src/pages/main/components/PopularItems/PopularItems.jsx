import './PopularItems.scss';
import Card from './components/Card/Card';

const PopularItems = () => {
	return (
		<div className="popularItems">
			<div class="headline">
				<span class="line"></span>
				<span class="line-text">Popular Items</span>
				<span class="line"></span>
			</div>
			<div className='items-wrapper'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default PopularItems;
