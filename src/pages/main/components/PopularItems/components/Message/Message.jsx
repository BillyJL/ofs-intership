import icon from '@images/Layer_150.png';
import './Message.scss';

const Message = () => {
	return (
		<div className="message">
			<div className="message-content">
				<span className="message-content-text div1">
					My dragons are misbehaving again.Unbelieveable!
				</span>
				<div className="div2">
					<img
						className="message-content-icon div2"
						src={icon}
						alt="icon"
					/>
					<span className="message-content-time div3">5h ago</span>
				</div>
			</div>
		</div>
	);
};

export default Message;
