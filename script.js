var startBtn = document.querySelector("#startBtn");
var timeEl = document.querySelector("#time");
var timerInterval; 



// this function initializes the timer
function setTime(secondsLeft) {
  // The timer is set to count down the seconds uising secondsLeft--, and display the seconds remaining at each interval
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
  //Time is up when timer reaches zero.  
  if(secondsLeft === 0) {
    clearInterval(timerInterval);
    //eventually this will trigger alert(gameover) that displays score and opens leaderboard window
      }
    // 1000 milliseconds equals 1 second, so our timer counts down by 1 second
  }, 1000);
  startQuestions();
}

/* function onTimesUp() {
  clearInterval(timerInterval);
  timeEl.textContent = secondsLeft;
} */

function startTime() {
  // Eventually want to put 15 minutes here: 60 * 15
  // "+1" ensures countdown does not start at one second less than timer duration
  var secondsLeft = 10 + 1;  
  setTime(secondsLeft); 
  } 

startBtn.addEventListener("click", startTime);

var myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  }
];
console.log(Object.values(myQuestions));
//look at how mulitple functions were triggered in previous assignment
function startQuestions() {
 if (confirm("answer this question") === true) {
   console.log("true");
   displayScore();
 } else {
   console.log("false");
 }
}

//track, store, and display the score!
var scoreCount = 0; 
var score = document.querySelector("#score");

function displayScore() {
  scoreCount++;
  score.textContent = scoreCount;
}

/*questions: Q: blah blah blah? [choices with checkbox and/or form] / A:


/*timer element & score element*/

/*timer is set at ~[1 min per question]~ to function decrementally*/

/*user score is set at zero to function incrementally*/

/*a series of question-forms to be propogated at random from the array*/
  //can be set up using a slide function

/*user input is validated
    false inputs trigger timer penalty & penalty alert
    true inputs trigger scoring increment*/

/*"0.00" time triggers game-over*/
/*user score is captured*/
/*user score is displayed and user is prompted for initials*/
/*score and identity are displayed stored persistantly (cross-browser/user-agent)*/
/* a new window is loaded, navigating to a leaderboard*/
/*leaderboard updates as new input is generated*/

