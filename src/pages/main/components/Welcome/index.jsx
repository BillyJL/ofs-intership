import Carousel from './components/Carousel';
import Banner from './components/Banner';
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
