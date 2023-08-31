import { Link } from 'react-router-dom';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Dropdowns from './components/Dropdowns';
import IconBar from 'components/common/IconBar';
import './Desktop.scss'

const Desktop = () => {
	return (
		<div className="header-desktop">
			<Link to="/">
				<Logo />
			</Link>
			<Navigation />
			<Dropdowns />
			<IconBar />
		</div>
	);
};

export default Desktop;
