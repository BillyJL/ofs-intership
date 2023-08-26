import CategoryList from 'components/common/CategoryList';
import Address from '../common/Address';
import Copyright from '../common/Copyright';
import './Mobile.scss';
import Dropdown from './components/Dropdown';
import { clientConfig } from 'config/client';
import Icons from 'components/common/Icons';
import IconBar from 'components/common/IconBar';

const Mobile = () => {
	const {
		footer: {
			category: { firstList, secondList, thirdList },
			about: { fourthList },
		},
	} = clientConfig;
	return (
		<div className="mobile">
			<div className="mobile-content">
				<Copyright />
				<Dropdown label="contact">
					<Address />
					<p>
						<a href="mailto:contact@osf-global.com">
							contact@osf-global.com
						</a>
					</p>
					<p>
						<a href="tel:+18885484344">+1 (888) 548-4344</a>
					</p>
				</Dropdown>
				<Dropdown label="category">
					<CategoryList
						listOfCategories={firstList.concat(
							secondList,
							thirdList,
						)}
					/>
				</Dropdown>
				<Dropdown label="about">
					<CategoryList listOfCategories={fourthList} />
				</Dropdown>
			</div>
			<div className="icon-wrapper">
				<Icons />
				<IconBar />
			</div>
		</div>
	);
};

export default Mobile;
