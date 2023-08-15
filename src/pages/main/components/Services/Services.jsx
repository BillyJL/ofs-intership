import './Services.scss';
import { slogansList } from '../../../../config/client';
import Slogan from './components/Slogan/Slogan';

const Services = () => {
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
