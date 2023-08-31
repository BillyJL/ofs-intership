import './Header.scss'
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';

const Header = () => {

	return (
		<header className='header'>
			<Desktop />
			<Mobile />
		</header>
	)
}

export default Header;