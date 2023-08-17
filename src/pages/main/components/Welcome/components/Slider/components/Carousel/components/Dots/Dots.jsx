import { DotButton, useDotButton } from './components/DotButton/DotButton';
import { useCallback } from 'react';

const Dots = ({ emblaApi }) => {
	const onButtonClick = useCallback((emblaApi) => {
		const { autoplay } = emblaApi.plugins();
		if (!autoplay) return;
		if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
	}, []);

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
		emblaApi,
		onButtonClick,
	);

	return(
		<div className="carousel__dots">
			{scrollSnaps.map((_, index) => (
				<DotButton
					key={index}
					onClick={() => onDotButtonClick(index)}
					className={'carousel__dot'.concat(
						index === selectedIndex ? ' carousel__dot--selected' : '',
					)}
				/>
			))}
		</div>
	)
};

export default Dots;
