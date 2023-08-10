import './CategoryList.scss';

const CategoryList = ({className, listOfCategories }) => {
	console.log(listOfCategories);
	return (
		<ul className={'list ' + className}>
			{listOfCategories.map((name, index) => (
				<li className='list-point' key={index}>{name}</li>
			))}
		</ul>
	);
};

export default CategoryList;
