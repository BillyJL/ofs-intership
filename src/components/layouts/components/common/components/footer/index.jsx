import './Footer.scss';
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';

const Footer = () => {

	return (
		<footer className="footer">
			<Desktop />
			<Mobile />
		</footer>
	);
};

export default Footer;
