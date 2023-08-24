import Logo from './components/Logo/Logo.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Dropdowns from './components/Dropdowns/index.jsx';
import IconBar from './components/IconBar/index.jsx';
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