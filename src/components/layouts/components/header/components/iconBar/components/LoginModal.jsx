import React, { useState, useEffect } from 'react';
import './LoginModal.scss';
import showPass from '@images/show_pass.png';
import hidePass from '@images/hide_pass.png';

const LoginModal = ({ onClose }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	const handleLogin = (e) => {
		e.preventDefault();
		onClose();
	};

	const handleOverlayClick = (e) => {
		if (e.target.classList.contains('modal-overlay')) {
			onClose();
		}
	};

	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		window.addEventListener('keydown', handleEscape);

		return () => {
			window.removeEventListener('keydown', handleEscape);
		};
	}, [onClose]);

	return (
		<div className="modal-overlay" onClick={handleOverlayClick}>
			<div className="login-modal">
				<h2>Sign in</h2>
				<form onSubmit={handleLogin}>
					<div className="input-container">
						<label>Email</label>
						<input
							type="email"
							value={email}
							onChange={handleEmailChange}
							required
						/>
					</div>
					<div className="input-container">
						<div className="password-text">
							<label>Password</label>
							<p className="forgot-password">Forgot password</p>
						</div>
						<div className="input-container-password">
							<input
								type={showPassword ? 'text' : 'password'}
								value={password}
								onChange={handlePasswordChange}
								required
								pattern="(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,}"
								title="Password must be at least 6 characters long and include at least 1 digit, 1 uppercase letter, and 1 special character."
							/>
							<button
								type="button"
								className="toggle-password"
								onClick={handleTogglePassword}
							>
								{showPassword ? <img src={hidePass} alt="hide" /> : <img src={showPass} alt="show" />}
							</button>
						</div>
					</div>
					<div className="buttons">
						<button className="login-button" type="submit">
							Login
						</button>
						<p className="create-account">
							I don’t have an account
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginModal;
