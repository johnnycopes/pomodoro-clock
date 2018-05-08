export function timer() {
	const sessionMinutes = document.querySelector('.timer__session-minutes');
	const sessionSeconds = document.querySelector('.timer__session-seconds');
	const breakMinutes = document.querySelector('.timer__break-minutes');
	const breakSeconds = document.querySelector('.timer__break-seconds');
	let sessionTimer;
	let breakTimer;
	let sessionLength;
	let breakLength;

	return {
		init,
		toggleFlow,
		resetTimer,
		changeSession,
		changeBreak
	};

	// =======================

	function init() {
		sessionLength = 25;
		breakLength = 5;
		sessionTimer = setNewTimer(sessionLength);
		breakTimer = setNewTimer(breakLength);
	}

	function toggleFlow() {
		sessionTimer.isRunning = !sessionTimer.isRunning;
		sessionTimer.isRunning ? startTimer(sessionTimer) : stopTimer(sessionTimer);
	}

	function resetTimer() {
		sessionTimer = setNewTimer(sessionLength);
		breakTimer = setNewTimer(breakLength);
		updateTimerUI(sessionTimer, sessionMinutes, sessionSeconds);
		updateTimerUI(breakTimer, breakMinutes, breakSeconds);
	}

	function changeSession(minutes) {
		sessionLength = minutes;
		resetTimer();
	}

	function changeBreak(minutes) {
		breakLength = minutes;
		resetTimer();
	}
	
	// -----------------------

	function setNewTimer(minutes) {
		let newTimer = {
			milliseconds: minsToMs(minutes),
			interval: null,
			isRunning: false
		};
		return newTimer;
	}

	function startTimer(timer) {
		timer.interval = setInterval(() => {
			timer.milliseconds -= 1000;
			updateTimerUI(sessionTimer, sessionMinutes, sessionSeconds);
		}, 1000);
	}

	function stopTimer(timer) {
		clearInterval(timer.interval);
	}

	function minsToMs(minutes) {
		return minutes * 60 * 1000;
	}

	function msToMinsAndSecs(milliseconds) {
		let minutes = Math.floor(milliseconds / 1000 / 60);
		let seconds = milliseconds / 1000 - (60 * minutes);
		return {minutes, seconds};
	}

	function updateTimerUI(timer, minutesElement, secondsElement) {
		const {minutes, seconds} = msToMinsAndSecs(timer.milliseconds);
		minutesElement.innerHTML = minutes.toString().padStart(2, 0);
		secondsElement.innerHTML = seconds.toString().padEnd(2, 0);
	}
}