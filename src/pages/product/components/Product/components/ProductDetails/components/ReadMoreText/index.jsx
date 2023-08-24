import React, { useState } from 'react';
import './ReadMoreText.scss';

const ReadMoreText = ({ text, limit = 100 }) => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	return (
		<div className="read-more-text">
			{expanded ? text : `${text.slice(0, limit)}...`}
			{text.length > limit && (
				<span className="read-more-link" onClick={toggleExpand}>
					{expanded ? 'Read less' : 'Read more'}
				</span>
			)}
		</div>
	);
};

export default ReadMoreText;
