import Carousel from './components/Carousel/Carousel';
import Banner from './components/Banner/Banner';
import './Welcome.scss';

const Welcome = () => {
	return (
		<div className='welcome'>
			<Carousel />
			<Banner />
		</div>
	);
};

export default Welcome;
