import Button from '@components/common/Button';
import './Slide.scss';
import { Link } from 'react-router-dom';

const Slide = ({ headline, text, img, textAlign }) => {
	return (
		<div
			className="carousel__slide slide"
			style={{ textAlign, backgroundImage: `url(${img})` }}
		>
			<h1 className="headline">{headline}</h1>
			<p className="slide-text">{text}</p>
			<Link to="/category">
				<Button className="slide-button" text={'view more'} />
			</Link>
		</div>
	);
};

export default Slide;
