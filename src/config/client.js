import delivery from '@images/Delivery_Packages.png';
import triangular from '@images/Triangular_Arrows.png';
import clipboard from '@images/Clipboard_Verification.png';
import sliderBack1 from '@images/Layer_3.png';
import sliderBack2 from '@images/layer_2.jpg';
import sliderBack3 from '@images/layer_1.jpg';
import latestPost1 from '@images/latestPost1.png';
import latestPost2 from '@images/latestPost2.png';
import latestPost3 from '@images/latestPost3.png';
import latestPost4 from '@images/latestPost4.png';


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
				textAlign: '-webkit-left'
			},
			{
				headline: 'Control and manage any device with cloud solutions',
				text: 'Improve business performance and the user experience with the right mix of IoT technology and processes',
				img: sliderBack2,
				textAlign: '-webkit-center'
			},
			{
				headline: 'Control and manage any device with cloud solutions',
				text: 'Improve business performance and the user experience with the right mix of IoT technology and processes',
				img: sliderBack3,
				textAlign: '-webkit-right'
			},
		]
	},

	server: {
		domain: process.env.REACT_APP_DOMAIN_URL,
		endpoints: {
			request: '/items'
		}
	},

	latestPosts: {
		slider: [
			{
				headline: "Kristina Dam Oak Table With White Marble",
				theme: "Awesome",
				image: latestPost1
			},
			{
				headline: "Kristina Dam Oak Table With White Marble",
				theme: "Marketing",
				image: latestPost2
			},
			{
				headline: "Kristina Dam Oak Table With White Marble",
				theme: "Awesome",
				image: latestPost3
			},
			{
				headline: "Kristina Dam Oak Table With White Marble",
				theme: "Marketing",
				image: latestPost4
			},
			{
				headline: "Kristina Dam Oak Table With White Marble",
				theme: "Awesome",
				image: latestPost3
			},
		]
	}
}