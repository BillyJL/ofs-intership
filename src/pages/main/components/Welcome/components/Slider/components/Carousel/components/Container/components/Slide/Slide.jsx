import Button from '@components/common/Button/Button';
import './Slide.scss';

const Slide = ({ headline, text, img, textAlign }) => {
	return (
		<div className="embla__slide slide" style={{textAlign, backgroundImage: `url(${img})`}}>
			<h1 className="headline">{headline}</h1>
			<p className="slide-text">{text}</p>
			<Button className="slide-button" text={'view more'} />
		</div>
	);
};

export default Slide;
