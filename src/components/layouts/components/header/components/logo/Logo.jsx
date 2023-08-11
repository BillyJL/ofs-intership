import logo from '../../../../assets/images/logo.png';
import './Logo.scss';

const Logo = () => {
	return (
		<div className='logo-parent'>
			<img className='logo-first' src={logo} alt="logo" />
			<p className='logo-second'>OSF</p>
			<p className='logo-third'>Academy</p>
		</div>
	)
}

export default Logo;