/* var startBtn = document.querySelector("#startBtn");
var setTimer = setInterval(duration, display) {
  
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    var timer = duration, minutes, seconds;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
        timer = duration;
}, 1000); */


var timeEl = document.querySelector("#time");
/* var mainEl = document.getElementById("main"); */


// Initialize time
// Eventually want to put 15 minutes here: 60 * 15
var timerInterval; 

// setTime() function
function setTime(secondsLeft) {
  // This is the timer variable that we set to the function setInterval so that we can later clear it
  // The function inside setInterval will count down the seconds uising secondsLeft--, change the textContent of the timeEl so that the user can see the seconds counting down.
  timerInterval = setInterval(function() {
    timeEl.textContent = secondsLeft;
    secondsLeft--;
   /*  + " seconds left till colorsplosion." */;

    // If secondsLeft is equal to 0, clearInterval(timerInterval);
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      /* sendMessage(); */
      timeEl.textContent = secondsLeft;
    }

    // 1000 milliseconds equals 1 second, so our timer counts down by 1 second
  }, 1000);
}

/* function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

} */

// Start the timer
/* setTime(); */

/* function initializeTimer(duration, display) {
  var timer = duration, minutes, seconds;

  console.log(timer);

}
 */

function startQuiz() {
  var secondsLeft = 10;  
  setTime(secondsLeft);
}
 
startBtn.addEventListener("click", startQuiz);


/* window.onload = function () {
  var fifteenMinutes = 60 * 15,
      display = document.querySelector('#time');
};
 */
/* function initializeTimer(duration, display) {
  var timer = duration, minutes, seconds, milliseconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10, 100, 1000);
      seconds = parseInt(timer % 60, 10, 100, 1000);
      milliseconds = parseInt(timer % 600, 100, 1000, 10000);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
      display.textContent = minutes + ":" + seconds + ":" + milliseconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var fifteenMinutes = 60 * 15,
      display = document.querySelector('#time');
  initializeTimer(fifteenMinutes, display);
}; */
/*quiz questions array*/



/*questions: Q: blah blah blah? [choices with checkbox and/or form] / A:


/*timer element & score element*/

/*timer is set at ~[1 min per question]~ to function decrementally*/

/*user score is set at zero to function incrementally*/

/*a series of question-forms to be propogated at random from the array*/

/*user input is validated
    false inputs trigger timer penalty & penalty alert
    true inputs trigger scoring increment*/

/*"0.00" time triggers game-over*/
/*user score is captured*/
/*user score is displayed and user is prompted for initials*/
/*score and identity are displayed stored persistantly (cross-browser/user-agent)*/
/* a new window is loaded, navigating to a leaderboard*/
/*leaderboard updates as new input is generated*/

