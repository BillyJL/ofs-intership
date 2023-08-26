import { Link } from 'react-router-dom';
import './Mobile.scss';
import logo from '@images/logo.png'

const Mobile = () => {
	return (
		<div className='header-mobile'>
			<Link to='/'><img src={logo} alt="logo" /></Link>
		</div>
	)
}

export default Mobile;