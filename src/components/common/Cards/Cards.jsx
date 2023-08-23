import Card from '../Card/Card';

const Cards = ({ items }) => {
	return (
		<>
			{items.map((item, index) => (
				<Card key={index} {...item} />
			))}
		</>
	);
};

export default Cards;
