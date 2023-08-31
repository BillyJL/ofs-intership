import Sales from './components/Sales';
import './Banner.scss';
import Button from '@components/common/Button';

const Banner = () => {
	return (
		<div className="banner-sales">
			<Sales />
			<div className='banner-sales-text'>
				<h3 className='headline'>Follow us on Facebook</h3>
				<p className='text'>Sed ut perspiciatis unde omnis iste natus error sit</p>
			</div>
			<a href="https://www.facebook.com"><Button className={'banner-sales-button'} text={'follow'} /></a>
		</div>
	)
}

export default Banner;