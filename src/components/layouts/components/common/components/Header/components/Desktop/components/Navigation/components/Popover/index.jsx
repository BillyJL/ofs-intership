import CategoryList from "@components/common/CategoryList";
import image from '@images/nav-photo.png';
import { clientConfig } from "config/client";

const Popover = () => {
	const {header: {firstList, secondList, thirdList, fourthList}} = clientConfig;
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
					listOfCategories={secondList}
				/>
				<CategoryList
					className="third-column"
					listOfCategories={thirdList}
				/>
				<h3 className="list-name second-name">sale</h3>
				<CategoryList
					className="fourth-column"
					listOfCategories={fourthList}
				/>
				<img className="image" src={image} alt="img" />
			</nav>
		</>
	);
};

export default Popover;
