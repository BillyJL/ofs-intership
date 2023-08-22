import { withMainLayout } from 'components/layouts';
import Services from './components/Services/Services';
import Welcome from './components/Welcome/Welcome';
import Banner from './components/Banner/Banner';
import PopularItems from './components/PopularItems/PopularItems';
import LatestPosts from './components/LatestPosts/LatestPosts';

const MainPage = () => {
	return (
		<>
			<Welcome />
			<PopularItems />
			<Banner />
			<LatestPosts />
			<Services />
		</>
	);
};

export default withMainLayout(MainPage);
