import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './Breadcrumbs.scss';

const Breadcrumbs = () => {
	const breadcrumbs = useBreadcrumbs();
	return (
		<div className="title">
			<ul className='breadcrumbs'>
				{breadcrumbs.map(({ match, breadcrumb }, index) => (
					<React.Fragment key={match.pathname}>
					{index !== 0 && <span>/</span>}
					{index !== breadcrumbs.length - 1 ? (
						<Link to={match.pathname}>
							{breadcrumb}
						</Link>
					) : (
						<span>{breadcrumb}</span>
					)}
				</React.Fragment>
				))}
			</ul>
			<div class="headline">
				<span class="line"></span>
				<h1 className="headline-text">
					{breadcrumbs[breadcrumbs.length - 1].breadcrumb}
				</h1>
				<span class="line"></span>
			</div>
		</div>
	);
};

export default Breadcrumbs;
