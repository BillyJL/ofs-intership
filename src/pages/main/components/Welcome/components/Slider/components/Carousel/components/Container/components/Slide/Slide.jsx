import './Slide.scss';

const Slide = ({ headline, text }) => {
	return (
		<div className="embla__slide slide">
			<h1 className="headline">{headline}</h1>
			<p className="slide-text">{text}</p>
			<button className="slide-button">view more</button>
		</div>
	);
};

export default Slide;
