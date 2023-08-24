import CategoryList from '@components/common/CategoryList';
import Contacts from './components/Contact';
import Copyright from './components/Copyright';
import Icons from '../../../../../common/Icons';
import './Footer.scss'

const Footer = () => {
	const firstList = ['Alcohol', 'Art', 'Books', 'Drink', 'Electronics'];
	const secondList = ['Home', 'Jewelry', 'Kids & Baby', 'Men`s Fashion', 'Mobile', 'Motocycles', 'Movies', 'Music'];
	const thirdList = ['Sport', 'Toys', 'Travel', 'Women`s Fashion'];
	const fourthList = ['About Us', 'Delivery', 'Testimonials', 'Contact'];

	return (
		<footer className='footer'>
			<Copyright className='div1' />
			<Contacts className='div5' />
			<h3 className='column-name div2'>Categories</h3>
			<CategoryList className='div6 text' listOfCategories={firstList} />
			<CategoryList className='div7 text' listOfCategories={secondList} />
			<CategoryList className='div8 text' listOfCategories={thirdList} />
			<h3 className='column-name div3'>About</h3>
			<CategoryList className='div9 text' listOfCategories={fourthList} />
			<Icons className='div4' />
		</footer>
	)
}

export default Footer;