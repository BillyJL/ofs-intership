import { Link } from 'react-router-dom';
import './Mobile.scss';
import logo from '@images/logo.png'
import BurgerMenu from './components/BurgerMenu';

const Mobile = () => {
	return (
		<div className='header-mobile'>
			<Link to='/'><img src={logo} alt="logo" /></Link>
			<BurgerMenu />
		</div>
	)
}

export default Mobile;