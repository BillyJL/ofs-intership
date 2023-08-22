import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './Breadcrumbs.scss';
import { routes } from 'config/routes';

const Breadcrumbs = () => {
	const breadcrumbs = useBreadcrumbs(routes);
	return (
		<div className="title">
			<ul className='breadcrumbs'>
				{breadcrumbs.map(({ match, breadcrumb }, index) => (
					<React.Fragment key={match.pathname}>
					{index !== breadcrumbs.length - 1 ? (
						<Link to={match.pathname}>
							{breadcrumb}
						</Link>
					) : (
						<span>{breadcrumb}</span>
					)}
					{index < breadcrumbs.length - 1 && "/"}
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
