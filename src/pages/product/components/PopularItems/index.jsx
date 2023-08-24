import './PopularItems.scss';
import { usePopularItem } from 'hooks/usePopularItem';
import Cards from 'components/common/Cards';

const PopularItems = () => {
	const { cardItems } = usePopularItem();
	return (
		<div className="popular-items">
			<div class="headline">
				<span class="line"></span>
				<span class="line-text">Popular Items</span>
				<span class="line"></span>
			</div>
			<div className="items-wrapper">
				<Cards items={cardItems.slice(0, 4)} />
			</div>
		</div>
	)
}

export default PopularItems;