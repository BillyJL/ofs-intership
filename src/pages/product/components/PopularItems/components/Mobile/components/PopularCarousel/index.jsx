import useEmblaCarousel from 'embla-carousel-react';
import { PopularDots, usePopularDots } from './components/PopularDots';
import Card from 'components/common/Card';
import './PopularCarousel.scss';

const PopularCarousel = ({ slides, options }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		usePopularDots(emblaApi);

	return (
		<div className="popular-slider">
			<div className="popular-slider__viewport" ref={emblaRef}>
				<div className="popular-slider__container">
					{slides.map((item, index) => (
						<div className="popular-slider__slide" key={index}>
							<Card {...item} />
						</div>
					))}
				</div>
			</div>

			<div className="popular-slider__dots">
				{scrollSnaps.map((_, index) => (
					<PopularDots
						key={index}
						onClick={() => onDotButtonClick(index)}
						className={'popular-slider__dot'.concat(
							index === selectedIndex
								? ' popular-slider__dot--selected'
								: '',
						)}
					/>
				))}
			</div>
		</div>
	);
};

export default PopularCarousel;
