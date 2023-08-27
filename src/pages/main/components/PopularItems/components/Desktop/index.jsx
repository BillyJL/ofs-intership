import { useState } from 'react';
import { usePopularItem } from 'hooks/usePopularItem';
import Card from '@components/common/Card';
import Cards from '@components/common/Cards';
import CardWithButton from './components/CardWithButton';
import Message from './components/Message';
import Button from 'components/common/Button';
import './Desktop.scss'

const Desktop = () => {
	const [isLoadedCards, setIsLoadedCards] = useState(false);
	const { cardItems } = usePopularItem();

	return (
		<div className='popular-desktop'>
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

export default Desktop;
