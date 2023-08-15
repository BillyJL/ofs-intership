import { withLayout } from '@components/layouts';
import Services from './components/Services/Services';
import Welcome from './components/Welcome/Welcome';
import Banner from './components/Banner/Banner';
import PopularItems from './components/PopularItems/PopularItems';

const MainPage = () => {
	return (
		<>
			<Welcome />
			<PopularItems />
			<Banner />
			<Services />
		</>
	);
};

export default withLayout(MainPage);
