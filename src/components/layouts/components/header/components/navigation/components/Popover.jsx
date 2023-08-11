import CategoryList from "../../../../../../common/categoryList/CategoryList";
import image from '../../../../../../../assets/images/nav-photo.png';

const Popover = () => {
	const firstList = ['Accessories', 'Alcohol', 'Art', 'Books', 'Drink', 'Electronics', 'Flowers & Plants', 'Food']
	return (
		<>
			<nav className="navigation-services">
				<h3 className="list-name first-name">product categories</h3>
				<CategoryList
					className="first-column"
					listOfCategories={firstList}
				/>
				<CategoryList
					className="second-column"
					listOfCategories={firstList}
				/>
				<CategoryList
					className="third-column"
					listOfCategories={firstList}
				/>
				<h3 className="list-name second-name">sale</h3>
				<CategoryList
					className="fourth-column"
					listOfCategories={firstList}
				/>
				<img className="image" src={image} alt="img" />
			</nav>
		</>
	);
};

export default Popover;
