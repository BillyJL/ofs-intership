import './Copyright.scss';

const Copyright = ({ className }) => {
	return (
		<div className={"copyright " + className}>
			<p>© Copyright 2019.</p>
			<p>All Rights Reserved.</p>
		</div>
	);
};

export default Copyright;
