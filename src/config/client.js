import delivery from '@images/Delivery_Packages.png';
import triangular from '@images/Triangular_Arrows.png';
import clipboard from '@images/Clipboard_Verification.png';
import sliderBack1 from '@images/Layer_3.png';
import sliderBack2 from '@images/layer_2.jpg';
import sliderBack3 from '@images/layer_1.jpg';


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
	}
}