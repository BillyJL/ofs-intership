import Slider from './components/Slider/Slider';
import Banner from './components/Banner/Banner';
import './Welcome.scss';

const Welcome = () => {
	return (
		<div className='welcome'>
			<Slider />
			<Banner />
		</div>
	);
};

export default Welcome;
