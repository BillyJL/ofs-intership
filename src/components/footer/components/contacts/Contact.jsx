import Address from './components/address/Address';
import './Contacts.scss';

const Contacts = ({ className }) => {
	return (
		<div className={'contacts ' + className}>
			<h3 className='column-name'>contact</h3>
			<Address />
			<p><a href="mailto:contact@osf-global.com">contact@osf-global.com</a></p>
			<p>+1 (888) 548-4344</p>
		</div>
	)
}

export default Contacts;