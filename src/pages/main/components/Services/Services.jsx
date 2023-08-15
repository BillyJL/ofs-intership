import './Services.scss';
import { clientConfig } from '../../../../config/client';
import Slogan from './components/Slogan/Slogan';

const Services = () => {
	const { slogansList } = clientConfig;
	return (
		<div className="services">
			{slogansList.map((item) => (
				<Slogan
					headline={item.headline}
					text={item.text}
					img={item.img}
				/>
			))}
		</div>
	);
};

export default Services;
