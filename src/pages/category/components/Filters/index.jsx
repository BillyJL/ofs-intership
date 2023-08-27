import { useState } from 'react';
import { clientConfig } from 'config/client';
import './Filters.scss';
import Filter from './components/Filter';

const Filters = () => {
	const [showFilters, setShowFilters] = useState(true);
	const {
		category: { filters },
	} = clientConfig;
	return (
		<div className="filter-wrapper">
			<span
				onClick={() => setShowFilters(!showFilters)}
				className="filter-hide"
			>
				{showFilters ? 'Hide Filters' : 'Show Filters'}
			</span>
			{showFilters && (
				<div className="filter">
					{filters.map((filter) => (
						<Filter {...filter} />
					))}
				</div>
			)}
		</div>
	);
};

export default Filters;
