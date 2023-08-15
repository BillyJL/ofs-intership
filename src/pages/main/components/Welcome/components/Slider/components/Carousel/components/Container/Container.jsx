import { clientConfig } from '@config/client';
import Slide from './components/Slide/Slide';

const Container = ({ emblaRef, slides }) => {
	const {
		welcome: { slider },
	} = clientConfig;
	return (
		<div className="embla__viewport" ref={emblaRef}>
			<div className="embla__container">
				{slider.map((item) => (
					<Slide
						{...item}
					/>
				))}
			</div>
		</div>
	);
};

export default Container;
