import Slide from './components/Slide/Slide';

const Container = ({ emblaRef, slides }) => {
	return (
		<div className="embla__viewport" ref={emblaRef}>
			<div className="embla__container">
				{slides.map((slideInfo) => (
					<Slide
						headline={slideInfo.headline}
						text={slideInfo.text}
					/>
				))}
			</div>
		</div>
	);
};

export default Container;
