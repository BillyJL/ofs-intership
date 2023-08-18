import { useState, useEffect } from 'react';

export const useCookiePolicy = () => {
	const [isShowModal, setShowModal] = useState(false);

	useEffect(() => {
		const hasSeenCookiePolicy = localStorage.getItem('hasSeenCookiePolicy');
		if (!hasSeenCookiePolicy) {
			setTimeout(() => {
				setShowModal(true);
			}, 10000);
		}
	}, []);

	const acceptCookiePolicy = () => {
		localStorage.setItem('hasSeenCookiePolicy', true);
		setShowModal();
	};

	const hideModel = () => {
		setShowModal(false);
	};

	return { isShowModal, hideModel, acceptCookiePolicy };
};
