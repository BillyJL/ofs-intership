import { withLayout } from '@components/layouts';
import Services from './components/Services/Services';
import Welcome from './components/Welcome/Welcome';

const MainPage = () => {
	return (
		<>
			<Welcome />
			<Services />
		</>
	);
};

export default withLayout(MainPage);
