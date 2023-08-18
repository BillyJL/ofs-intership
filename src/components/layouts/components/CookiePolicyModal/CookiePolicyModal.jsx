import Button from 'components/common/Button/Button';
import { useCookiePolicy } from 'hooks/useCookiePolicy';
import './CookiePolicyModal.scss';

const CookiePolicyModal = () => {
	const { isShowModal, hideModel, acceptCookiePolicy } = useCookiePolicy();

	return (
		<div className={`modal ${isShowModal ? 'show' : ''}`}>
			<div className='div3'>
			<button
				className="modal-close-button"
				onClick={hideModel}
			>
				&times;
			</button>
			</div>
			<div className="modal-body div1">
				<h2>This website uses cookies</h2>
				<p>
					OSF uses its own and third-party cookies for statistical
					purposes, to know your preferences, for website performance
					and interaction with social media offering publicity
					tailored to your interests. If you continue browsing, we
					consider that you accept its use. You can expand this
					information consulting our Cookies Policy Page.
				</p>
			</div>
			<div className='div2'>
			<Button
				text="Accept"
				className="modal-accept-button"
				onClick={acceptCookiePolicy}
			/>
			</div>
		</div>
	);
};

export default CookiePolicyModal;
