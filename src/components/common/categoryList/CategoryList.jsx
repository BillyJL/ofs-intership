import './CategoryList.scss';

const CategoryList = ({className, listOfCategories }) => {
	return (
		<ul className={'list ' + className}>
			{listOfCategories.map((name, index) => (
				<li key={index}>{name}</li>
			))}
		</ul>
	);
};

export default CategoryList;
