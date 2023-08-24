import { Link } from 'react-router-dom';
import './Slide.scss';

const Slide = ({ headline, theme, image }) => {
	return (
		<div className="embla__slide slider-slide">
			<div className="slider-slide-content">
				<Link to="/product/pr1">
					<img
						className="slider-slide-image"
						src={image}
						alt="headline"
					/>
					<h3 className="slider-slide-headline">{headline}</h3>
				</Link>
				<p className="slider-slide-theme">{theme}</p>
			</div>
		</div>
	);
};

export default Slide;
