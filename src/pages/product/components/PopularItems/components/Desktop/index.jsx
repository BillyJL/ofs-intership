import Cards from '@components/common/Cards';

import './Desktop.scss';

const Desktop = ({items}) => {
	return (
		<div className="desktop-wrapper">
			<Cards items={items} />
		</div>
	);
};

export default Desktop;
