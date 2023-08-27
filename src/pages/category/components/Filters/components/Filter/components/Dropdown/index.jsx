import React, { useState } from 'react';
import './Dropdown.scss';

const Dropdown = ({ options }) => {
	const [selectedOption, setSelectedOption] = useState(null);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setIsDropdownOpen(false);
	};

	return (
		<div className="dropdown">
			<div
				className={`dropdown-toggle ${isDropdownOpen ? 'open' : ''}`}
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
			>
				{selectedOption || 'Select'}
				<span className="triangle"></span>
			</div>
			{isDropdownOpen && (
				<ul className="dropdown-options">
					{options.map((option) => (
						<li
							key={option}
							className={`option ${
								selectedOption === option ? 'selected' : ''
							}`}
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
