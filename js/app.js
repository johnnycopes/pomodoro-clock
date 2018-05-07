const App = app();
const UI = ui(App);
App.init();

// TODO: split these two modules into separate files

function app() {
	let sessionTimer;
	let breakTimer;
	
	return {
		init,
		onFlowClick,
		onResetClick
	};

	function init() {
		sessionTimer = resetTimer(25);
		breakTimer = resetTimer(5);
	}

	function onFlowClick() {
		sessionTimer.isRunning = !sessionTimer.isRunning;
		sessionTimer.isRunning ? startTimer(sessionTimer) : stopTimer(sessionTimer);
	}

	function onResetClick() {
		sessionTimer = resetTimer(25);
		breakTimer = resetTimer(5);
		console.log('reset');
		console.log(sessionTimer);
	}

	function resetTimer(minutes) {
		let newTimer = {
			time: minutesToMilliseconds(minutes),
			interval: null,
			isRunning: false
		};
		return newTimer;
	}

	function toggleTimer() {
		if (sessionTimer.time > 0) {
			sessionTimer.isRunning = !sessionTimer.isRunning;
			sessionTimer.isRunning ? startTimer(sessionTimer) : stopTimer(sessionTimer);
		}
	}

	function startTimer(timer) {
		timer.interval = setInterval(() => {
			timer.time -= 1000;
			console.log(timer.time);
		}, 1000);
	}

	function stopTimer(timer) {
		console.log('stop!');
		clearInterval(timer.interval);
	}

	function minutesToMilliseconds(minutes) {
		return minutes * 60 * 1000;
	}
}

function ui(app) {
	const sessionInput = document.querySelector('#session');
	const breakInput = document.querySelector('#break');
	const playbackFlowBtn = document.querySelector('.playback__button-flow');
	const playbackFlowIcon = document.querySelector('.playback__button-flow-icon')
	const playbackResetBtn = document.querySelector('.playback__button-reset');

	playbackFlowBtn.addEventListener('click', onFlowClick);
	playbackResetBtn.addEventListener('click', app.onResetClick);

	function onFlowClick() {
		playbackFlowBtn.classList.toggle('playback__button-flow--start');
		playbackFlowBtn.classList.toggle('playback__button-flow--pause');
		playbackFlowIcon.classList.toggle('fa-play');
		playbackFlowIcon.classList.toggle('fa-pause');
		playbackResetBtn.classList.toggle('playback__button-reset--disabled');
		playbackResetBtn.disabled = !playbackResetBtn.disabled;
		app.onFlowClick();
	}

	function onResetClick() {
		app.onResetClick();
	}
}