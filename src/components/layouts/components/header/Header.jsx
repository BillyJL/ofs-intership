import Logo from './components/logo/Logo.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import Dropdowns from './components/dropdowns/Dropdowns.jsx';
import IconBar from './components/iconBar/IconBar.jsx';
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