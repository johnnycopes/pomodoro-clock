export function input(timer) {
	const sessionInput = document.querySelector('#session');
	const breakInput = document.querySelector('#break');
	const playbackFlowBtn = document.querySelector('.playback__button-flow');
	const playbackFlowIcon = document.querySelector('.playback__button-flow-icon')
	const playbackResetBtn = document.querySelector('.playback__button-reset');
	const panel = document.querySelector('.panel')
	const panelContent = document.querySelector('.panel__content');
	const panelOpenBtn = document.querySelector('.panel__open-panel');
	const panelCloseBtn = document.querySelector('.panel__close-panel');

	sessionInput.addEventListener('input', onSessionChange);
	breakInput.addEventListener('input', onBreakChange);
	playbackFlowBtn.addEventListener('click', onFlowClick);
	playbackResetBtn.addEventListener('click', onResetClick);
	panelOpenBtn.addEventListener('click', onOpenPanel);
	panelCloseBtn.addEventListener('click', onClosePanel);

	return {
		init
	};

	// =======================

	function init() {
		onSessionChange();
		onBreakChange();
	}

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

	function onOpenPanel() {
		panel.classList.add('panel--open');
		setTimeout(() => {
			panelContent.classList.add('panel__content--visible');
		}, 300);
	};

	function onClosePanel() {
		panelContent.classList.remove('panel__content--visible');
		setTimeout(() => {
			panel.classList.remove('panel--open');
		}, 100);
	}
}