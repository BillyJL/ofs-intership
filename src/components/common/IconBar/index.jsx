import search from '@images/search.png';
import login from '@images/login.png';
import liked from '@images/liked.png';
import cart from '@images/cart.png';
import './IconBar.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoginModal from './components/LoginModal';

const IconBar = () => {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const { numberOfProducts } = useSelector((state) => state.cartReducer);
	const { numberOfLiked } = useSelector((state) => state.likedReducer);
	return (
		<ul className="icon-bar">
			<li>
				<div className="icon-wrapper">
					<img src={search} alt="search" />
				</div>
			</li>
			<li onClick={() => setIsLoginModalOpen(true)}>
				<div className="icon-wrapper">
					<img src={login} alt="login" />
					{isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />}
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
