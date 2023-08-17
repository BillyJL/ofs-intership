import useEmblaCarousel from 'embla-carousel-react';

import Autoplay from 'embla-carousel-autoplay';
import Dots from './components/Dots/Dots';
import Container from './components/Container/Container';

const Carousel = ({ slides, options }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

	return (
		<div className="carousel div1">
			<Container emblaRef={emblaRef} slides={slides} />
			<Dots emblaApi={emblaApi} />
		</div>
	);
};

export default Carousel;
