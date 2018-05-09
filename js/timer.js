export function timer() {
	const $round = document.querySelector('.timer__round-number');
	const $sessionMinutes = document.querySelector('.timer__session-minutes');
	const $sessionSeconds = document.querySelector('.timer__session-seconds');
	const $breakMinutes = document.querySelector('.timer__break-minutes');
	const $breakSeconds = document.querySelector('.timer__break-seconds');
	let round = 1;
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
		sessionLength = 0.05;
		breakLength = 0.05;
		resetTimer();
		resetRound();
	}

	function toggleFlow() {
		if (sessionTimer.milliseconds > 0) {
			toggleTimer(sessionTimer);
		}
		else if (breakTimer.milliseconds > 0) {
			toggleTimer(breakTimer);
		}
		else {
			resetTimer();
			incrementRound();
			toggleFlow();
		}
	}

	function resetTimer() {
		sessionTimer = setNewTimer(sessionLength, $sessionMinutes, $sessionSeconds);
		breakTimer = setNewTimer(breakLength, $breakMinutes, $breakSeconds);
		updateTimerUI(sessionTimer);
		updateTimerUI(breakTimer);
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

	function setNewTimer(minutes, minutesElement, secondsElement) {
		let newTimer = {
			milliseconds: convertMinsToMs(minutes),
			interval: null,
			isRunning: false,
			minutesElement,
			secondsElement
		};
		return newTimer;
	}

	function toggleTimer(timer) {
		timer.isRunning = !timer.isRunning;
		timer.isRunning ? startTimer(timer) : stopTimer(timer);
	}

	function startTimer(timer) {
		timer.interval = setInterval(() => {
			timer.milliseconds -= 1000;
			updateTimerUI(timer);
			if (timer.milliseconds <= 0) {
				toggleTimer(timer);
				toggleFlow();
			}
		}, 1000);
	}

	function stopTimer(timer) {
		clearInterval(timer.interval);
	}

	function convertMinsToMs(minutes) {
		return minutes * 60 * 1000;
	}

	function convertMsToMinsAndSecs(milliseconds) {
		let minutes = Math.floor(milliseconds / 1000 / 60);
		let seconds = milliseconds / 1000 - (60 * minutes);
		return {minutes, seconds};
	}

	function updateElementUI(element, value) {
		element.innerHTML = value.toString().padStart(2, 0);
	}

	function resetRound() {
		round = 1;
		updateElementUI($round, round);
	}

	function incrementRound() {
		round++;
		updateElementUI($round, round);
	}

	function updateTimerUI(timer) {
		const {minutes, seconds} = convertMsToMinsAndSecs(timer.milliseconds);
		updateElementUI(timer.minutesElement, minutes);
		updateElementUI(timer.secondsElement, seconds);
	}
}