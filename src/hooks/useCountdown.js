import { useState } from 'react';
import { useHttp } from './common/useHttp';
import { clientConfig } from 'config/client';

export const useCountdown = () => {
	const { request } = useHttp();
	const [email, setEmail] = useState('');
	const { server } = clientConfig;
	const serverUrl = `${server.domain}${server.endpoints.emails}`;

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const data = { email };
			const response = await request(
				serverUrl,
				'POST',
				JSON.stringify(data),
			);
		} catch (error) {
			console.log('An error occurred while sending the email');
		}
	};

	return {
		handleEmailChange,
		handleSubmit,
	};
};
