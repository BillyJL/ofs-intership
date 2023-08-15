import { withLayout } from '@components/layouts';
import Services from './components/Services/Services';
import Welcome from './components/Welcome/Welcome';
import Banner from './components/Banner/Banner';

const MainPage = () => {
	return (
		<>
			<Welcome />
			<Banner />
			<Services />
		</>
	);
};

export default withLayout(MainPage);
