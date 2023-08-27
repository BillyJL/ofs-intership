import { useState } from 'react';
import Button from 'components/common/Button';
import { clientConfig } from 'config/client';
import './ItemsList.scss';
import Cards from 'components/common/Cards';
import { useItemList } from 'hooks/useItemList';

const ItemsList = () => {
	const {itemsToShow} = useItemList();
	const [isLoadedCards, setIsLoadedCards] = useState(false);
	const {
		category: { items },
	} = clientConfig;
	return (
		<div className="items-list">
			<div className="items-wrapper">
				<Cards items={items.slice(0, itemsToShow)} />
				{isLoadedCards && <Cards items={items.slice(itemsToShow)} />}
			</div>
			{isLoadedCards || (
				<Button
					onClick={() => setIsLoadedCards(true)}
					text={'load more'}
					className={'items-load'}
				/>
			)}
		</div>
	);
};

export default ItemsList;
