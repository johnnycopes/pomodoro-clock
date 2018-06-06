export function timer() {
	const $app = document.querySelector('.app');
	const $session = document.querySelector('.timer__session');
	const $break = document.querySelector('.timer__break');
	const $round = document.querySelector('.timer__round-number');
	let sessionTimer;
	let breakTimer;
	let sessionLength;
	let breakLength;
	let round = 1;

	return {
		init,
		toggleFlow,
		resetTimer,
		changeSession,
		changeBreak
	};

	// =======================

	function init() {
		resetTimer();
		resetRound();
	}

	function toggleFlow() {
		if (sessionTimer.milliseconds > 0) {
			toggleTimer(sessionTimer);
			setCurrentTimer(sessionTimer, true);
			setCurrentTimer(breakTimer, false);
		}
		else if (breakTimer.milliseconds > 0) {
			toggleTimer(breakTimer);
			setCurrentTimer(sessionTimer, false);
			setCurrentTimer(breakTimer, true);
		}
		else {
			resetTimer();
			incrementRound();
			toggleFlow();
		}
	}

	function resetTimer() {
		sessionTimer = setNewTimer(sessionLength, $session);
		breakTimer = setNewTimer(breakLength, $break);
		updateTimerUI(sessionTimer);
		updateTimerUI(breakTimer);
		setCurrentTimer(sessionTimer, false);
		setCurrentTimer(breakTimer, false);
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

	function setNewTimer(minutes, timerElement) {
		let newTimer = {
			milliseconds: convertMinsToMs(minutes),
			interval: null,
			isRunning: false,
			timerElement,
			minutesElement: timerElement.querySelector('.minutes'),
			secondsElement: timerElement.querySelector('.seconds')
		};
		return newTimer;
	}

	function toggleTimer(timer) {
		timer.isRunning = !timer.isRunning;
		timer.isRunning ? startTimer(timer) : stopTimer(timer);
		updateRunningTimerUI(timer);
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
		setBorder(true);
		
	}

	function stopTimer(timer) {
		clearInterval(timer.interval);
		setBorder(false);
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
		let {minutes, seconds} = convertMsToMinsAndSecs(timer.milliseconds);
		updateElementUI(timer.minutesElement, minutes);
		updateElementUI(timer.secondsElement, seconds);
	}

	function updateRunningTimerUI(timer) {
		timer.timerElement.classList.toggle('timer--running');
	}

	function setCurrentTimer(timer, isCurrentTimer) {
		isCurrentTimer ? timer.timerElement.classList.add('timer--current') : timer.timerElement.classList.remove('timer--current');
	}

	function setBorder(isActive) {
		isActive ? $app.classList.add('app--timer-running') : $app.classList.remove('app--timer-running');
	}
}