import bannerBack from '@images/banner_back.png';
import './Banner.scss';

const Banner = () => {
	return (
		<div className="banner">
			<div className="banner-content">
				<h1 className="banner-content-headline">Banner OSF Theme</h1>
				<p className="banner-content-text">
					Sed ut perspiciatis unde omnis iste natus error sit
					voluptatem accusantium
				</p>
			</div>
			<img className="banner-image" src={bannerBack} alt="banner" />
		</div>
	);
};

export default Banner;
