import { withMainLayout } from 'components/layouts';
import Services from 'components/common/Services';
import Welcome from './components/Welcome';
import Banner from './components/Banner';
import PopularItems from './components/PopularItems';
import LatestPosts from '@components/common/LatestPosts';

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
