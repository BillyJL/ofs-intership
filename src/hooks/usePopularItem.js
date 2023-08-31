import { useEffect, useState } from 'react';
import { useHttp } from './common/useHttp';
import { clientConfig } from 'config/client';

export const usePopularItem = () => {
	const [cardItems, setCardItems] = useState([]);
	const { server } = clientConfig;
	const { request } = useHttp();

	const serverUrl = `${server.domain}${server.endpoints.items}`;
	useEffect(() => {
		request(serverUrl).then((response) => {
			setCardItems(response);
		});
	}, []);

	return { cardItems };
};
