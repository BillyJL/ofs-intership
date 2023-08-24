import { selectFilter } from "./helper";

const Filter = ({ type, label, options }) => {
	console.log(type);
	return (
		<div className="filter-param">
			<span>{label}</span>
			{selectFilter(type, options)}
		</div>
	);
};

export default Filter;
