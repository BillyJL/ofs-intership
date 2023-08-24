import { Link } from 'react-router-dom';
import './CategoryList.scss';

const CategoryList = ({className, listOfCategories }) => {
	return (
		<ul className={'list ' + className}>
			{listOfCategories.map((name, index) => (
				<Link to="/404" key={index}>{name}</Link>
			))}
		</ul>
	);
};

export default CategoryList;
