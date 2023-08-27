import PopularCarousel from './components/PopularCarousel';
import './Mobile.scss';

const Mobile = () => {
	const OPTIONS = { containScroll: 'trimSnaps' };
	return (
		<main className="popular-mobile">
			<PopularCarousel options={OPTIONS} />
		</main>
	);
};

export default Mobile;
