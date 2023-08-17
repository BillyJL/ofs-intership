import Logo from './components/logo/Logo.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import Dropdowns from './components/dropdowns/Dropdowns.jsx';
import IconBar from './components/iconBar/IconBar.jsx';

import './Header.scss'

const Header = () => {

	return (
		<header className='header'>
			<Logo />
			<Navigation />
			<Dropdowns />
			<IconBar />
		</header>
	)
}

export default Header;