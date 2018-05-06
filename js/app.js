// // buttons
// const sessionIncrease = document.querySelector(".session-increase");
// const sessionDecrease = document.querySelector(".session-decrease");
// const sessionDisplay = document.querySelector(".session-display");
// const breakIncrease = document.querySelector(".break-increase");
// const breakDecrease = document.querySelector(".break-decrease");
// const breakDisplay = document.querySelector(".break-display");
// const reset = document.querySelector(".reset");

// const timer = document.querySelector(".timer-display");
// const timerMinutes = document.querySelector(".minutes");
// const timerSeconds = document.querySelector(".seconds");

// let intervalID;

// reset.addEventListener("click", function() {
//   window.clearInterval(intervalID);
//   sessionDisplay.innerHTML = 5;
//   breakDisplay.innerHTML = 5;
//   timer.innerHTML = 25;
// });

// sessionIncrease.addEventListener("click", function(){
//   sessionDisplay.innerHTML = parseInt(sessionDisplay.innerHTML, 10) + 1;
//   timerMinutes.innerHTML = sessionDisplay.innerHTML;
// });
// sessionDecrease.addEventListener("click", function(){
//   sessionDisplay.innerHTML = parseInt(sessionDisplay.innerHTML, 10) - 1;
//   timerMinutes.innerHTML = sessionDisplay.innerHTML;
// });

// breakIncrease.addEventListener("click", function(){
//   breakDisplay.innerHTML = parseInt(breakDisplay.innerHTML, 10) + 1;
// });
// breakDecrease.addEventListener("click", function(){
//   breakDisplay.innerHTML = parseInt(breakDisplay.innerHTML, 10) - 1;
// });

//   // Start/pause the timer
// timer.addEventListener("click", function() {
//   if (intervalID) {
//     window.clearInterval(intervalID);
//   }
//   let time = parseInt(timerMinutes.innerHTML, 10) * 60;
//   intervalID = window.setInterval(function decreaseTimer(){
//     time--;
//     timerMinutes.innerHTML = Math.floor((time / 60) % 1000);
//     timerSeconds.innerHTML = time % 60;
//     if (time >= 0) {
//       console.log('hey');
//     }
//     else {
//       window.clearInterval(intervalID);
//     }
//   }, 1000);
// });
