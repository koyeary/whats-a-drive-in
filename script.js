var startBtn = document.querySelector("#startBtn");
var timeEl = document.querySelector("#time");
 

var quizContainer = document.querySelector("#quiz");
var resultsContainer = document.getElementById("#results");
var answerQuestion = document.getElementById("#answerQuestion");

var timerInterval;
//we will need a function that counts the number of total options
var allOptions; 
var allIncorrect = (allOptions - score);
//an on-click function @ gameOver modal that takes us to the leaderboard

//Here we store quiz questions as an array, options (in nested arrays), 
//and answers (calling the corresponding option index).
/* var myQuestions = 
  {[
    question: "Who invented JavaScript?",
    options: [
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    ],
    answer: 2
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    options: [
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    ],
    answer: 2
  },
  {
    question: "Which tool can you use to ensure code quality?",
    options: [
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
],
    answer: 2
  ]}
]; */

// this function initializes the timer
function setTime(secondsLeft) {
  // The timer is set to count down the seconds uising secondsLeft--, 
  //and display the seconds remaining at each interval
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    //Time is up when timer reaches zero.  
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      /* gameOver();   */      }
    //if user options a question incorrectly, 30 seconds is taken off the clock.
  /* if (wrongAnswer === true) {
      secondsLeft - 30;
    } */
    // 1000 milliseconds equals 1 second, so our timer counts down by 1 second
  }, 1000);
  startQuestions();
}


/* 
function gameOver() {
  if (secondsLeft === 0 || alloptions === 10) {
    //this will be a modal
    alert("game over! You got " + allIncorrect , " options wrong." );
    
  }
} */

function startTime() {
  // Eventually want to put 15 minutes here: 60 * 15
  // "+1" ensures countdown does not start at one second less than timer duration
  var secondsLeft = 10 + 1;  
  setTime(secondsLeft); 
  } 

startBtn.addEventListener("click", startTime);



/* console.log(Object.values(myQuestions)); */
//look at how mulitple functions were triggered in previous assignment
//first a modal pops up to start the quiz
function startQuestions() {
 if (confirm("answer this question") === true) {
   console.log("true");
   userScore();
 } else {
   console.log("false");
   userPenalty();
 }
  /* console.log(secondsLeft); */
}

//track, store, and display the score!
var scoreCount = 0; 
var score = document.querySelector("#score");


function userScore() {
  scoreCount++;
  score.textContent = scoreCount;
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

//append questions to modal

/* // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */