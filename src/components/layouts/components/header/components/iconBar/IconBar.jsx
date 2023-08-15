import search from '@images/search.png';
import login from '@images/login.png';
import liked from '@images/liked.png';
import cart from '@images/cart.png';
import './IconBar.scss';

const IconBar = () => {
	return (
		<ul className="icon-bar">
			<li>
				<div className="icon-wrapper">
					<img src={search} alt="search" />
				</div>
			</li>
			<li>
				<div className="icon-wrapper">
					<img src={login} alt="login" />
				</div>
			</li>
			<li>
				<div className="icon-wrapper">
					<img src={liked} alt="liked" />
					<span>1</span>
				</div>
			</li>
			<li>
				<div className="icon-wrapper">
					<img src={cart} alt="cart" />
					<span>2</span>
				</div>
			</li>
		</ul>
	);
};

export default IconBar;
