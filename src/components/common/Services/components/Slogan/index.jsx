import './Slogan.scss';

const Slogan = ({ headline, text, img }) => {
	return (
		<div className="slogan">
			<img className="slogan-image" src={img} alt="" />
			<div className="slogan-main">
				<h3 className="slogan-main-headline">{headline}</h3>
				<p className="slogan-main-text">{text}</p>
			</div>
		</div>
	);
};

export default Slogan;
