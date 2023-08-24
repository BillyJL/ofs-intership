import Sales from './components/Sales';
import './Banner.scss';
import Button from '@components/common/Button';

const Banner = () => {
	return (
		<div className="banner div2">
			<Sales />
			<div className='banner-text'>
				<h3 className='headline'>Follow us on Facebook</h3>
				<p className='text'>Sed ut perspiciatis unde omnis iste natus error sit</p>
			</div>
			<Button className={'banner-button'} text={'follow'} />
		</div>
	)
}

export default Banner;