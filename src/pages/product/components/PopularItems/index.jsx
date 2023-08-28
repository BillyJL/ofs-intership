import './PopularItems.scss';
import { usePopularItem } from 'hooks/usePopularItem';
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';

const PopularItems = () => {
	const { cardItems } = usePopularItem();
	const items = cardItems.slice(0, 4);
	return (
		<div className="popular-items">
			<div class="headline">
				<span class="line"></span>
				<span class="line-text">Popular Items</span>
				<span class="line"></span>
			</div>
			<Desktop items={items} />
			<Mobile items={items} />
		</div>
	)
}

export default PopularItems;