import './Slogan.scss';

const Slogan = ({ headline, text, img }) => {
	return (
		<div className="slogan">
			<img className="slogan-image div1" src={img} alt="" />
			<h3 className="slogan-headline div2">{headline}</h3>
			<p className="slogan-text div3">{text}</p>
		</div>
	);
};

export default Slogan;
