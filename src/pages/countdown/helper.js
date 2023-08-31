export function calculateTimeLeft(date) {
	const targetDate = new Date(date);
	const difference = targetDate - new Date();
	const totalSeconds = Math.floor(difference / 1000);
	const days = Math.floor(totalSeconds / (3600 * 24));
	const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;
	return { days, hours, minutes, seconds, totalSeconds };
}