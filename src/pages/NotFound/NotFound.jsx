import { withLayout } from '@components/layouts';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
	return (
		<div className="notfound">
			<h1 className="div1">Oops!</h1>
			<div className="notfound-message div2">
				<h2 className="notfound-message-headline">
					Sorry, this page could not be found!
				</h2>
				<p className="notfound-message-text">
					Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
					natoque penatibus et magnis dis parturient montes, nascetur
					ridiculus mus.
				</p>
				<p className="notfound-message-text">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
					Aenean commodo ligula eget dolor. Aenean massa.
				</p>
			</div>
			<Link className="notfound-back div3">Go back to Homepage</Link>
			<form className="notfound-search div4">
				<form className="notfound-search div4">
					<h2>Search our site</h2>
					<div className="input-wrapper">
						<input placeholder="SEARCH" />
						<span className="search-icon"></span>
					</div>
				</form>
			</form>
		</div>
	);
};

export default withLayout(NotFound);
