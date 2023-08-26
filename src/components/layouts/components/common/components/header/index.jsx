import Logo from './components/Logo/index.jsx';
import Navigation from './components/Navigation/index.jsx';
import Dropdowns from './components/Dropdowns/index.jsx';
import IconBar from 'components/common/IconBar/index.jsx';
import { Link } from 'react-router-dom';

import './Header.scss'

const Header = () => {

	return (
		<header className='header'>
			<Link to='/'><Logo /></Link>
			<Navigation />
			<Dropdowns />
			<IconBar />
		</header>
	)
}

export default Header;