import { withMainLayout } from 'components/layouts';
import Services from 'components/common/Services/Services';
import Welcome from './components/Welcome/Welcome';
import Banner from './components/Banner/Banner';
import PopularItems from './components/PopularItems/PopularItems';
import LatestPosts from '@components/common/LatestPosts/LatestPosts';

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
