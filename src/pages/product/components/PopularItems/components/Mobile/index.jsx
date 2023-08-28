import PopularCarousel from './components/PopularCarousel';
import './Mobile.scss';

const Mobile = ({items}) => {
	const OPTIONS = { containScroll: 'trimSnaps' };
	return (
		<main className="mobile-wrapper">
			<PopularCarousel slides={items} options={OPTIONS} />
		</main>
	);
};

export default Mobile;
