import useEmblaCarousel from 'embla-carousel-react';
import {
	PrevButton,
	NextButton,
	usePrevNextButtons,
} from './components/ArrowButton';
import { clientConfig } from 'config/client';
import Slide from './components/Slide';
import './Slider.scss';
import sliderLine from '@images/sliderLine.png'

const Slider = () => {
	const {latestPosts: {slider}} = clientConfig;
	const options = { align: 'start', loop: true };
	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	return (
		<div className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slider.map((slide) => (
						<Slide {...slide} />
					))}
				</div>
			</div>

			<div className="embla__buttons">
				<PrevButton
					onClick={onPrevButtonClick}
					disabled={prevBtnDisabled}
				/>
				<img src={sliderLine} />
				<NextButton
					onClick={onNextButtonClick}
					disabled={nextBtnDisabled}
				/>
			</div>
		</div>
	);
};

export default Slider;
