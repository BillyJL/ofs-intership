import { clientConfig } from '@config/client';
import Slide from './components/Slide';

const Container = ({ emblaRef }) => {
	const {
		welcome: { slider },
	} = clientConfig;
	return (
		<div className="carousel__viewport" ref={emblaRef}>
			<div className="carousel__container">
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
