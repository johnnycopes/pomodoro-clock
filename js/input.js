export function input(timer) {
	const sessionInput = document.querySelector('#session');
	const breakInput = document.querySelector('#break');
	const playbackFlowBtn = document.querySelector('.playback__button-flow');
	const playbackFlowIcon = document.querySelector('.playback__button-flow-icon')
	const playbackResetBtn = document.querySelector('.playback__button-reset');

	sessionInput.addEventListener('input', onSessionChange);
	breakInput.addEventListener('input', onBreakChange);
	playbackFlowBtn.addEventListener('click', onFlowClick);
	playbackResetBtn.addEventListener('click', onResetClick);

	// -----------------------

	function onFlowClick() {
		playbackFlowBtn.classList.toggle('playback__button-flow--start');
		playbackFlowBtn.classList.toggle('playback__button-flow--pause');
		playbackFlowIcon.classList.toggle('fa-play');
		playbackFlowIcon.classList.toggle('fa-pause');
		playbackResetBtn.classList.toggle('playback__button-reset--disabled');
		playbackResetBtn.disabled = !playbackResetBtn.disabled;
		sessionInput.disabled = !sessionInput.disabled;
		breakInput.disabled = !breakInput.disabled;
		timer.toggleFlow();
	}

	function onResetClick() {
		timer.resetTimer();
	}

	function onSessionChange() {
		timer.changeSession(sessionInput.value);
	}
	
	function onBreakChange() {
		timer.changeBreak(breakInput.value);
	}
}