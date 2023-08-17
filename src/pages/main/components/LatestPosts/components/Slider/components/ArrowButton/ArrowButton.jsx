import { useCallback, useEffect, useState } from 'react';
import leftButton from '@images/arrow_left.png';
import rightButton from '@images/arrow_right.png';

export const usePrevNextButtons = (emblaApi) => {
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

	const onPrevButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
	}, [emblaApi]);

	const onNextButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
	}, [emblaApi]);

	const onSelect = useCallback((emblaApi) => {
		setPrevBtnDisabled(!emblaApi.canScrollPrev());
		setNextBtnDisabled(!emblaApi.canScrollNext());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onSelect(emblaApi);
		emblaApi.on('reInit', onSelect);
		emblaApi.on('select', onSelect);
	}, [emblaApi, onSelect]);

	return {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	};
};

export const PrevButton = (props) => {
	const { children, ...restProps } = props;

	return (
		<button
			className="embla__button embla__button--prev"
			type="button"
			{...restProps}
		>
			<img src={leftButton} alt="left"/>
			{children}
		</button>
	);
};

export const NextButton = (props) => {
	const { children, ...restProps } = props;

	return (
		<button
			className="embla__button embla__button--next"
			type="button"
			{...restProps}
		>
			<img src={rightButton} alt="right"/>
			{children}
		</button>
	);
};
