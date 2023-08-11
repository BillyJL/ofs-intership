import facebook from '../../../../assets/images/facebook.svg';
import google from '../../../../assets/images/google.svg';
import twitter from '../../../../assets/images/icons8-twitter.svg';
import pinterest from '../../../../assets/images/pinterest.svg';
import './Icons.scss'


const Icons = ({ className }) => {
	return (
		<ul className={'icon-list ' + className}>
			<img src={facebook} alt="facebook" />
			<img src={google} alt="google" />
			<img src={twitter} alt="twitter" />
			<img src={pinterest} alt="pinterest" />
		</ul>
	);
};

export default Icons;
