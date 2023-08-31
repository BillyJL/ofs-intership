import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Countdown.scss'

const Countdown = ({value, maxValue, measurement}) => {
	return (
		<div className="countdown-unit">
			<CircularProgressbar
				counterClockwise={true}
				value={value}
				maxValue={maxValue}
				text={value}
				styles={buildStyles({
					pathColor: "#84bc22",
					backgroundColor: 'transparent',
					textColor: '#45413e',
					textSize: '48px'
				})}
			/>
			<span>{measurement}</span>
		</div>
	);
};

export default Countdown;
