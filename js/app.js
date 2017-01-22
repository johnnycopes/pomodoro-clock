// buttons
const sessionIncrease = document.querySelector(".session-increase");
const sessionDecrease = document.querySelector(".session-decrease");
const breakIncrease = document.querySelector(".break-increase");
const breakDecrease =document.querySelector(".break-decrease");
const display = document.querySelector(".display");
const reset = document.querySelector(".reset");


sessionIncrease.addEventListener('click', function() {
  console.log('hey');
});
  // number values
// var sessionValue = document.getElementById("session-value"),
    // breakValue = document.getElementById("break-value");

// Define functions

//  // matches the display value to the value of session length
//function displaySession() {
//  parseInt(displayValue, 10);
//  if ()
//}
//
//function displayBreak() {
//
//}

//}

// Make the buttons do a given task when clicked

  // Session length increase/decrease
// sessionIncrease.addEventListener("click", function(){
//   sessionValue.innerHTML = parseInt(sessionValue.innerHTML, 10) + 1;
//   display.value = parseInt(display.value, 10) + 1;
// });
// sessionDecrease.addEventListener("click", function(){
//   sessionValue.innerHTML = parseInt(sessionValue.innerHTML, 10) - 1;
//   display.value = parseInt(display.value, 10) - 1;
// });
//
//   // Break length increase/decrease
// breakIncrease.addEventListener("click", function(){
//   breakValue.innerHTML = parseInt(breakValue.innerHTML, 10) + 1;
// });
//
// breakDecrease.addEventListener("click", function(){
//   breakValue.innerHTML = parseInt(breakValue.innerHTML, 10) - 1;
// });

  // Start/pause the timer
display.addEventListener("click", function(){
  var timer = parseInt(display.value, 10);
  var testInterval = setInterval(function(){
    // check if the timer has hit 0 seconds
    if (timer <= 0) {
    // clear the timer
      clearInterval(testInterval);
    // indication for the user that the timer is up
      alert("Time's up!");
    } else {
    // if the timer is greater than 0, increment it negatively
      timer--;
    }
     // the second parameter of the function setInterval is the       number of millisecods. this is the amount of time between         executing the above code in the function. 1000ms = 1s
  }, 1000);
});
