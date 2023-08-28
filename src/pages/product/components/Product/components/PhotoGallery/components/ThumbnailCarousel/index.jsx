import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ThumbnailCarouselDotButton, useDotButton } from './components/ThumbnailCarouselDotButton';
import './ThumbnailCarousel.scss';

const ThumbnailCarousel = ({slides, options}) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	return (
		<div className="thumbnail-carousel">
			<div className="thumbnail-carousel__viewport" ref={emblaRef}>
				<div className="thumbnail-carousel__container">
					{slides.map((slide, index) => (
						<div className="thumbnail-carousel__slide" key={index}>
							<img
								className="thumbnail-carousel__slide__img"
								src={slide}
								alt="Your alt text"
							/>
						</div>
					))}
				</div>
			</div>

			<div className="thumbnail-carousel__dots">
				{scrollSnaps.map((_, index) => (
					<ThumbnailCarouselDotButton
						key={index}
						onClick={() => onDotButtonClick(index)}
						className={'thumbnail-carousel__dot'.concat(
							index === selectedIndex
								? ' thumbnail-carousel__dot--selected'
								: '',
						)}
					/>
				))}
			</div>
		</div>
	);
};

export default ThumbnailCarousel;
