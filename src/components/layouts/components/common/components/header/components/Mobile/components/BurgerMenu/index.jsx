import { useState } from 'react';
import './BurgerMenu.scss';
import Dropdown from 'components/common/Dropdown';
import CategoryList from 'components/common/CategoryList';
import { clientConfig } from 'config/client';
import navImage from '@images/nav-photo.png';

const BurgerMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const {
		header: { firstList, fourthList },
	} = clientConfig;

	return (
		<div className="burger-menu">
			<div
				className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
			{isMenuOpen && (
				<div className="menu-content">
					<Dropdown
						label="Services"
						className="menu-content-dropdown"
					>
						<Dropdown
							label="Product Categories"
							className="child-dropdown"
						>
							<CategoryList
								listOfCategories={firstList}
								className="dropdown-list"
							/>
						</Dropdown>
						<Dropdown label="Sales" className="child-dropdown">
							<CategoryList
								listOfCategories={fourthList}
								className="dropdown-list"
							/>
						</Dropdown>
					</Dropdown>
					<Dropdown
						label="Company"
						className="menu-content-dropdown"
					/>
					<Dropdown
						label="Library"
						className="menu-content-dropdown"
					/>
					<Dropdown
						label="Contact US"
						className="menu-content-dropdown"
					/>
					<img src={navImage} alt='naw photo' />
				</div>
			)}
		</div>
	);
};

export default BurgerMenu;
