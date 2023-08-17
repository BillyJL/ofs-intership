import './Slide.scss';

const Slide = ({ headline, theme, image }) => {
	console.log(headline, theme, image);
	return (
		<div className="embla__slide slider-slide">
			<div className='slider-slide-content'>
				<img className="slider-slide-image" src={image} alt="headline" />
				<h3 className="slider-slide-headline">{headline}</h3>
				<p className="theme">{theme}</p>
			</div>
		</div>
	);
};

export default Slide;
