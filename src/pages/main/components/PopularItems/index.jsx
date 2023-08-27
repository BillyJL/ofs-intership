import './PopularItems.scss';
import Desktop from './components/Desktop';

const PopularItems = () => {
	

	return (
		<div className="popularItems">
			<div class="headline">
				<span class="line"></span>
				<span class="line-text">Popular Items</span>
				<span class="line"></span>
			</div>
			<Desktop />
		</div>
	);
};

export default PopularItems;
