import Copyright from '../common/Copyright';
import Contacts from './components/Contact';
import CategoryList from 'components/common/CategoryList';
import Icons from 'components/common/Icons';
import './Desktop.scss';
import { clientConfig } from 'config/client';

const Desktop = () => {
	const {
		footer: {
			category: { firstList, secondList, thirdList },
			about: { fourthList },
		},
	} = clientConfig;
	return (
		<div className="desktop">
			<Copyright className="div1" />
			<Contacts className="div5" />
			<h3 className="column-name div2">Categories</h3>
			<CategoryList className="div6 text" listOfCategories={firstList} />
			<CategoryList className="div7 text" listOfCategories={secondList} />
			<CategoryList className="div8 text" listOfCategories={thirdList} />
			<h3 className="column-name div3">About</h3>
			<CategoryList className="div9 text" listOfCategories={fourthList} />
			<Icons className="div4" />
		</div>
	);
};

export default Desktop;
