import { useEffect } from 'react';
import { useHttp } from './common/useHttp';
import { clientConfig } from 'config/client';

export const usePopularItem = (setCardItems) => {
	const { server } = clientConfig;
	const {request} = useHttp();
	const serverUrl = `${server.domain}${server.endpoints.request}`;
	console.log(serverUrl);
	useEffect(() => {
		request(serverUrl).then((response) => {
			console.log(response);
			setCardItems(response);
		});
	}, [request, serverUrl]);
};
