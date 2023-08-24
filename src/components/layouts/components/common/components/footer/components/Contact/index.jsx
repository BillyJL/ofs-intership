import Address from './components/Address';
import './Contact.scss';

const Contacts = ({ className }) => {
	return (
		<div className={'contacts ' + className}>
			<h3 className='column-name'>contact</h3>
			<Address />
			<p><a href="mailto:contact@osf-global.com">contact@osf-global.com</a></p>
			<p><a href="tel:+18885484344">+1 (888) 548-4344</a></p>
		</div>
	)
}

export default Contacts;