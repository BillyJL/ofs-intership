import Carousel from './components/Carousel/Carousel';
import './Slider.scss';

const OPTIONS = { loop: true };
const SLIDES = [
	{
		headline: 'Control and manage any device with cloud solutions',
		text: 'Improve business performance and the user experience with the right mix of IoT technology and processes',
	},
	{
		headline: 'Control and manage any device with cloud solutions',
		text: 'Improve business performance and the user experience with the right mix of IoT technology and processes',
	},
	{
		headline: 'Control and manage any device with cloud solutions',
		text: 'Improve business performance and the user experience with the right mix of IoT technology and processes',
	},
];

const Slider = () => <Carousel slides={SLIDES} options={OPTIONS} />;

export default Slider;
