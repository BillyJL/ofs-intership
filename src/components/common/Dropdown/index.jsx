import { useState } from 'react';
import './Dropdown.scss';

const Dropdown = ({ children, label, className }) => {
	const [showChildren, setShowChildren] = useState(false);
	return (
		<div className={"main-dropdown " + className}>
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
