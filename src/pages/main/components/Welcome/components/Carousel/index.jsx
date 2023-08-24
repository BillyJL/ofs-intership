import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Dots from './components/Dots';
import Container from './components/Container';
import './Carousel.scss'

const Carousel = () => {
	const options = { loop: true };
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

	return (
		<div className="carousel div1">
			<Container emblaRef={emblaRef} />
			<Dots emblaApi={emblaApi} />
		</div>
	);
};

export default Carousel;
