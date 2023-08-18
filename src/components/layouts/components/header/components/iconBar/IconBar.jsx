import search from '@images/search.png';
import login from '@images/login.png';
import liked from '@images/liked.png';
import cart from '@images/cart.png';
import './IconBar.scss';
import { useSelector } from 'react-redux';

const IconBar = () => {
	const { numberOfProducts } = useSelector((state) => state.cartReducer);
	const { numberOfLiked } = useSelector((state) => state.likedReducer);
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
					<span>{numberOfLiked}</span>
				</div>
			</li>
			<li>
				<div className="icon-wrapper">
					<img src={cart} alt="cart" />
					<span>{numberOfProducts}</span>
				</div>
			</li>
		</ul>
	);
};

export default IconBar;
