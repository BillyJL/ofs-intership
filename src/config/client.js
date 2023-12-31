import delivery from '@images/Delivery_Packages.png';
import triangular from '@images/Triangular_Arrows.png';
import clipboard from '@images/Clipboard_Verification.png';
import sliderBack1 from '@images/Layer_3.png';
import sliderBack2 from '@images/Layer_4.png';
import sliderBack3 from '@images/Layer_5.png';
import latestPost1 from '@images/latestPost1.png';
import latestPost2 from '@images/latestPost2.png';
import latestPost3 from '@images/latestPost3.png';
import latestPost4 from '@images/latestPost4.png';
import productImg1 from '@images/PG.10216885.JJ169XX.PZ.jpg';
import productImg2 from '@images/PG.10216885.JJ169XX.BZ.jpg';
import productImg3 from '@images/PG.10216885.JJ8UTXX.PZ.jpg';
import productImg4 from '@images/PG.10216885.JJ8UTXX.BZ.jpg';

export const clientConfig = {
	slogansList: [
		{
			headline: 'Focus',
			text: 'Our unwavering focus on superior service delivery and building next generation competencies',
			img: delivery,
		},
		{
			headline: 'method',
			text: 'A standardized methodology designed to deliver measurable business results and predictable costs',
			img: triangular,
		},
		{
			headline: 'Knowledge',
			text: 'A highly skilled, proactive workforce that reliably improves each client’s ROI while mitigating their business risk',
			img: clipboard,
		},
	],

	welcome: {
		slider: [
			{
				headline: 'Control and manage any device with cloud solutions',
				text: 'Improve business performance and the user experience with the right mix of IoT technology and processes',
				img: sliderBack1,
				textAlign: '-webkit-left',
			},
			{
				headline: 'Control and manage any device with cloud solutions',
				text: 'Improve business performance and the user experience with the right mix of IoT technology and processes',
				img: sliderBack2,
				textAlign: '-webkit-center',
			},
			{
				headline: 'Control and manage any device with cloud solutions',
				text: 'Improve business performance and the user experience with the right mix of IoT technology and processes',
				img: sliderBack3,
				textAlign: '-webkit-right',
			},
		],
	},

	server: {
		domain: process.env.REACT_APP_DOMAIN_URL,
		endpoints: {
			items: '/items',
			emails: '/emails',
		},
	},

	latestPosts: {
		slider: [
			{
				headline: 'Kristina Dam Oak Table With White Marble',
				theme: 'Awesome',
				image: latestPost1,
			},
			{
				headline: 'Kristina Dam Oak Table With White Marble',
				theme: 'Marketing',
				image: latestPost2,
			},
			{
				headline: 'Kristina Dam Oak Table With White Marble',
				theme: 'Awesome',
				image: latestPost3,
			},
			{
				headline: 'Kristina Dam Oak Table With White Marble',
				theme: 'Marketing',
				image: latestPost4,
			},
			{
				headline: 'Kristina Dam Oak Table With White Marble',
				theme: 'Awesome',
				image: latestPost3,
			},
		],
	},

	category: {
		filters: [
			{
				label: 'Price',
				type: 'dropdown',
				options: [
					'$0.00 - $100.00',
					'$100.00 - $1000.00',
					'$1000.00 - $10000.00',
				],
			},
			{
				label: 'Brands',
				type: 'dropdown',
				options: ['Ukraine sport', 'Nike', 'Puma', 'Adidas'],
			},
			{
				label: 'Size',
				type: 'dropdown',
				options: ['Small', 'Average', 'Big'],
			},
			{
				label: 'Color',
				type: 'color',
				options: [
					'#ffffff',
					'#43c0cf',
					'#3d402f',
					'#4aaf00',
					'#315bbd',
					'#ec6115',
					'#dc041d',
					'#efead7',
				],
			},
			{
				label: 'Sort by',
				type: 'dropdown',
				options: ['Price', 'Size', 'Brands'],
			},
			{
				label: 'Show',
				type: 'dropdown',
				options: ['16 per page', '32 per page'],
			},
		],

		items: [
			{
				name: 'Kristina Dam Oak Table With White Marble Top',
				price: '$ 799.55',
				img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTtUSQxtxt8d66gtjq9sOUt7LJ1u0xEQ4RLdlI957bLYWrXv6kp',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'Activate Facial Mask and Charcoal Soap ',
				price: '$ 129.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'Vitra Cork Stool B, Cork - Design Within Reach',
				price: '$ 299.99',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated ',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated ',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated ',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated ',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated ',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated ',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated ',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated ',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated ',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated ',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated ',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated ',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated ',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated ',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated ',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
			{
				name: 'EAMES x Cast + Crew - Custom Powder Coated ',
				price: '$ 799.55',
				img: 'https://i.pinimg.com/564x/f1/68/e7/f168e7def06a71ebdb3c5508145d418d.jpg',
			},
		],
	},
	product: {
		images: [productImg1, productImg2, productImg3, productImg4],
		dropdown: {
			colors: ['Dark grey', 'Light grey', 'Black', 'White', 'Blue'],
			colorMap: {
				'Dark grey': '#3d402f',
				'Light grey': '#a7a9a5',
				Black: '#000',
				White: '#fff',
				Blue: '#3498db',
			},
		},
		text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas',
		tabs: {
			tabTitles: ['Description', 'Additional Information', 'Reviews (3)'],
			tabContents: [
				'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.\n Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
				'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
				'It`s reviews Tab',
			],
		},
	},

	footer: {
		category: {
			firstList: ['Alcohol', 'Art', 'Books', 'Drink', 'Electronics'],
			secondList: [
				'Home',
				'Jewelry',
				'Kids & Baby',
				'Men`s Fashion',
				'Mobile',
				'Motocycles',
				'Movies',
				'Music',
			],
			thirdList: ['Sport', 'Toys', 'Travel', 'Women`s Fashion'],
		},
		about: {
			fourthList: ['About Us', 'Delivery', 'Testimonials', 'Contact'],
		},
	},

	header: {
		firstList: [
			'Accessories',
			'Alcohol',
			'Art',
			'Books',
			'Drink',
			'Electronics',
			'Flowers & Plants',
			'Food',
		],
		secondList: [
			'Gadgets',
			'Garden',
			'Grocery',
			'Home',
			'Jewelry',
			'Kids & Baby',
			'Men`s fashion',
			'Mobile',
		],
		thirdList: [
			'Motorcycles',
			'Movies',
			'Music',
			'Office',
			'Pets',
			'Romantic',
			'Sport',
			'Toys',
		],
		fourthList: [
			'Accessories',
			'Alcohol',
			'Art',
			'Books',
			'Drink',
			'Electronics',
			'Flowers & Plants',
			'Food',
		],
	},

	countdown: {
		targetDate: new Date('2023-09-01T00:00:00'),
		time: [
			{
				measurement: 'days',
				maxValue: 30,
			},
			{
				measurement: 'hours',
				maxValue: 24,
			},
			{
				measurement: 'minutes',
				maxValue: 60,
			},
			{
				measurement: 'seconds',
				maxValue: 60,
			},
		],
	},
};
