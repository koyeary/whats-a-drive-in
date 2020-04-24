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

var questions = [
  {
    prompt: "Who is the Queen of England?\na: Elizabeth\nb:Kody Ko\nc: Martha Kelly",
    answer: "a"
  },
  {
    prompt: "who is Lauren Rantala?\na: my wife\nb: my fiance\nd: the prime minister of finland",
    answer: "a"
  }
]

function questionPrompts() {
  
}


var response;
function startQuestions() {
  for (var i = 0; i < questions.length; i++) {
    vex.dialog.prompt({
      message: questions[i],
      placeholder: 'Enter a, b, or c',
      callback: function () {
        checkAnswers(response);
      }
      });
  }
}    
        
function checkAnswers() {
  if(response == questions.answer) {
    userScore();
      alert("you got it right");
    } else {
      alert("you got it wrong");
      // secondsLeft--;
    } if (secondsLeft === 0){
      return alert("game over");
    }
  }    
/* alert("you scored " + scoreCount);
prompt("Enter your initials and head to the leaderboard!");  
} */


// this function initializes the timer
function setTime(secondsLeft) {
  // The timer is set to count down the seconds uising secondsLeft--, 
  //and display the seconds remaining at each interval
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    console.log(secondsLeft);
    //Time is up when timer reaches zero.  
    if (secondsLeft === 0) {
      clearInterval(timerInterval); }
    // 1000 milliseconds equals 1 second, so our timer counts down by 1 second
  }, 1000);
  hitStart();
}

var secondsLeft = 100 + 1;  
function startTime() {
  // Eventually want to put 15 minutes here: 60 * 15
  // "+1" ensures countdown does not start at one second less than timer duration
  //var secondsLeft = 10 + 1;  
  setTime(secondsLeft); 
  } 

function hitStart() {
  console.log("start!");
  setTimeout(() => {startQuestions(); }, 1000);
}

/* function startQuestions() {
  vex.dialog.confirm({
    message: 'Are you absolutely sure you want to destroy the alien planet?',
    callback: function (value) {
        console.log(value)
    }
})
} */


startBtn.addEventListener("click", startTime);



/* function checkAnswer(answer) {
  if (questions[questionIndex].correct == answer) {
    scoreCount++;
    rightAnswer();
  }else{
    wrongAnswer();
  }
}
 */


//track, store, and display the score!
var scoreCount = 0; 
var score = document.querySelector("#score");


function userScore() {
  scoreCount++;
  score.textContent = scoreCount;
}
