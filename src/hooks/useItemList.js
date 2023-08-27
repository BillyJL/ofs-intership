import { useState, useEffect } from 'react';

export const useItemList = (itemsShow = 16) => {
	const [itemsToShow, setItemsToShow] = useState(itemsShow);

	const handleResize = () => {
		if (window.innerWidth <= 990) {
			setItemsToShow(4);
		} else {
			setItemsToShow(16);
		}
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return { itemsToShow };
};
