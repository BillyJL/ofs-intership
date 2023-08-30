import { useState } from 'react';
import './DropdownColors.scss';
import { clientConfig } from 'config/client';

const DropdownColors = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedColor, setSelectedColor] = useState('Dark grey');
	const {
		product: {
			dropdown: { colorMap, colors },
		},
	} = clientConfig;

	const handleColorSelect = (color) => {
		setSelectedColor(color);
		setIsOpen(false);
	};

	return (
		<div className="dropdown-imitation" onClick={() => setIsOpen(!isOpen)}>
			<div
				className="circle"
				style={{ backgroundColor: colorMap[selectedColor] }}
			></div>
			<span className="text">{selectedColor}</span>
			<div className={`triangle ${isOpen ? 'open' : ''}`}></div>
			{isOpen && (
				<ul className="dropdown-list">
					{colors.map((color) => (
						<li
							key={color}
							className={`dropdown-item ${
								selectedColor === color ? 'selected' : ''
							}`}
							onClick={() => handleColorSelect(color)}
						>
							{color}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default DropdownColors;
