import { useState, useEffect } from 'react';
import { withMainLayout } from 'components/layouts';
import './CountdownPage.scss';
import Countdown from './components/Countdown';
import { useCountdown } from 'hooks/useCountdown';
import { calculateTimeLeft } from './helper';
import { clientConfig } from 'config/client';

const CountdownPage = () => {
	const { handleEmailChange, handleSubmit } = useCountdown();
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	const { time, targetDate } = clientConfig.countdown;

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft(calculateTimeLeft(targetDate));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="timer-container">
			<div className="timer-content">
				<div className="headline">
					<h1 className="headline-name">
						We Will Release OSF Academy
					</h1>
					<p className="headline-description">
						We are working hard and estimated release time products
						below. Sed ac tristique nunc, ut gravida nunc. Nulla
						consequat erat non lectus imperdiet.
					</p>
				</div>
				<div className="countdown">
					<div className="timer">
						{time.map((item) => (
							<Countdown
								value={timeLeft[item.measurement]}
								maxValue={item.maxValue}
								measurement={item.measurement}
							/>
						))}
					</div>
				</div>
				<form className="email-input" onSubmit={handleSubmit}>
					<input
						type="email"
						placeholder="Enter your email"
						onChange={handleEmailChange}
					/>
					<button className="send-button" type="submit">
						{'>'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default withMainLayout(CountdownPage);
