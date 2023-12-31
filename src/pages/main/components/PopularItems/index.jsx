import './PopularItems.scss';
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';

const PopularItems = () => {
	

	return (
		<div className="popularItems">
			<div class="headline">
				<span class="line"></span>
				<span class="line-text">Popular Items</span>
				<span class="line"></span>
			</div>
			<Desktop />
			<Mobile />
		</div>
	);
};

export default PopularItems;
