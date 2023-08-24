import { useState } from 'react';
import { usePopularItem } from 'hooks/usePopularItem';
import Card from '@components/common/Card';
import Cards from '@components/common/Cards';
import CardWithButton from './components/CardWithButton/CardWithButton';
import Message from './components/Message/Message';
import Button from 'components/common/Button';
import './PopularItems.scss';

const PopularItems = () => {
	const [isLoadedCards, setIsLoadedCards] = useState(false);
	const { cardItems } = usePopularItem();

	return (
		<div className="popularItems">
			<div class="headline">
				<span class="line"></span>
				<span class="line-text">Popular Items</span>
				<span class="line"></span>
			</div>
			<div className="items-wrapper">
				<Card {...cardItems[0]} />
				<CardWithButton />
				<Cards items={cardItems.slice(1, 6)} />
				<Message />
				{isLoadedCards && <Cards items={cardItems.slice(6)} />}
			</div>
			{isLoadedCards || (
				<Button
					onClick={() => setIsLoadedCards(true)}
					text={'load more'}
					className={'load'}
				/>
			)}
		</div>
	);
};

export default PopularItems;
