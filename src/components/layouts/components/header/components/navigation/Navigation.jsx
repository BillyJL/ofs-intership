import './Navigation.scss';
import Popover from './components/Popover';

const Navigation = () => {

	return (
		<nav className="navigation">
			<ul className='navigation-bar'>
				<li className='navigation-bar-point'>
					<a href="#">services</a>
					<Popover />
				</li>
				<li className='navigation-bar-point'>
					<a href="#">company</a>
				</li>
				<li className='navigation-bar-point'>
					<a href="#">library</a>
				</li>
				<li className='navigation-bar-point'>
					<a href="#">contact us</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
