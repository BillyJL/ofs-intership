import { useState } from 'react';
import './Dropdown.scss';

const Dropdown = ({ children, label }) => {
	const [showChildren, setShowChildren] = useState(false);
	return (
		<div className="footer-dropdown">
			<h3
				onClick={() => setShowChildren(!showChildren)}
				className="column-name open-close"
			>
				{label}
				<span className={`triangle ${showChildren ? 'up' : 'down'}`} />
			</h3>
			{showChildren && children}
		</div>
	);
};

export default Dropdown;
