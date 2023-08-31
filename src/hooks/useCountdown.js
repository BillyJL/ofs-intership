import { useState } from 'react';
import { useHttp } from './common/useHttp';
import { clientConfig } from 'config/client';
import { toast } from 'react-hot-toast';

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
			await request(
				serverUrl,
				'POST',
				JSON.stringify(data),
			);
			setEmail('');
			toast.success('Email has been sent')

		} catch (error) {
			toast.error('An error occurred while sending the email');
		}
	};

	return {
		handleEmailChange,
		handleSubmit,
	};
};
