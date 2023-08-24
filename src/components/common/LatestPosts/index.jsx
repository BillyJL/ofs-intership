import Slider from './components/Slider';
import './LatestPosts.scss';

const LatestPosts = () => {
	return (
		<div className="posts">
			<header className="posts-header">
				<h2 className="posts-header-headline">Featured Products</h2>
				<p className="posts-header-text">
					Unde omnis iste natus error sit voluptatem
				</p>
			</header>

			<Slider />
		</div>
	);
};

export default LatestPosts;
