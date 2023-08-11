import { getCurrentYear } from './helpers';
import './Copyright.scss';

const Copyright = ({ className }) => {
	const currentYear = getCurrentYear();
	return (
		<div className={"copyright " + className}>
			<p>© Copyright {currentYear}.</p>
			<p>All Rights Reserved.</p>
		</div>
	);
};

export default Copyright;
