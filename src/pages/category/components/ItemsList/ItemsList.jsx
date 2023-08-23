import { useState } from 'react';
import Button from 'components/common/Button/Button';
import { clientConfig } from 'config/client';
import './ItemsList.scss';
import Cards from 'components/common/Cards/Cards';

const ItemsList = () => {
	const [isLoadedCards, setIsLoadedCards] = useState(false);
	const {
		category: { items },
	} = clientConfig;
	return (
		<div className="items-list">
			<div className="items-wrapper">
				<Cards items={items.slice(0, 16)} />
				{isLoadedCards && <Cards items={items.slice(16)} />}
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
