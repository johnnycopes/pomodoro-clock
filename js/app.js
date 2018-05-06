const sessionInput = document.querySelector('#session');
const breakInput = document.querySelector('#break');
const playbackFlowBtn = document.querySelector('.playback__button-flow');
const playbackResetBtn = document.querySelector('.playback__button-reset');

let sessionTimer = {
  time: minutesToMilliseconds(25),
  interval: null,
  isRunning: false
};

let breakTimer = {
  time: minutesToMilliseconds(5),
  interval: null,
  isRunning: false
};

playbackFlowBtn.addEventListener('click', () => toggleTimer(sessionTimer));

function toggleTimer(timer) {
  timer.isRunning = !timer.isRunning;
  timer.isRunning ? startTimer(timer) : stopTimer(timer);
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