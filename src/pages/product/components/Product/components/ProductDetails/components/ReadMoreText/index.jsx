import React, { useState } from 'react';
import './ReadMoreText.scss';
import { useDispatch, useSelector } from 'react-redux';
import { productSlice } from 'store/reducers/ProductSlice';

const ReadMoreText = ({ text, limit = 100 }) => {
	const [expanded, setExpanded] = useState(false);
	const { showingOtherStuff } = useSelector((state) => state.productReducer);
	const { showingOtherToggle } = productSlice.actions;
	const dispatch = useDispatch();

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
			<span onClick={() => dispatch(showingOtherToggle())} className="show-hide">
				{showingOtherStuff ? 'Hide other stuff' : 'Show other stuff'}
			</span>
		</div>
	);
};

export default ReadMoreText;
