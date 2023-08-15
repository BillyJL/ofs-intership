import facebook from '@images/facebook.svg';
import google from '@images/google.svg';
import twitter from '@images/icons8-twitter.svg';
import pinterest from '@images/pinterest.svg';
import './Icons.scss'


const Icons = ({ className }) => {
	return (
		<ul className={'icon-list ' + className}>
			<a href="https://www.facebook.com"><img src={facebook} alt="facebook" /></a>
			<a href="https://www.google.com"><img src={google} alt="google" /></a>
			<a href="https://twitter.com"><img src={twitter} alt="twitter" /></a>
			<a href="https://www.pinterest.com"><img src={pinterest} alt="pinterest" /></a>
		</ul>
	);
};

export default Icons;
