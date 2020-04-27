


var startBtn = document.querySelector("#startBtn");
var leaderBtn = document.querySelector("#leaderBtn");
var timeEl = document.querySelector("#time");
var scoreEl = document.querySelector("#score"); 
var secondsLeft = 60;
var score = 0;


var quizContainer = document.querySelector("#quiz");
var timerInterval;
/* function startQuestions() {
  for (var i = 0; i < questions.length; i++) {
    vex.dialog.prompt({
      message: questions[i].message,
      placeholder: questions[i].options,
      callback: function (value) {
       console.log(value);
       return value;
      }
    
    });
    
  } */

/* function startQuestions() {
  for (var i = 0; i < questions.length; i++) {
    x = questions[i];
    questionLoop(x);
    if (myAnswer === )
    }
  }


  function questionLoop() {
  /*   for (var i = 0; i < questions.length; i++) { 
      var myAnswer = vex.dialog.prompt({
        message: x.message,
        placeholder: x.options,
        callback: function (value) {
          console.log(value);
          return value;
        }
      });
    } */
var questions =  [{
      message: "Who is Brenda?",
      options: "a: a lady, b: a dog, or c: the president",
      answer: "blah",
    },
    
  {
      message: "Who is Joanna",
      options: "testing",
      answer: "a",
    },
    
  {
      message: "Who is Laura",
      options: "where does it break",
      answer: "b",
    },
    
    {
      message: "Who is Ashley?",
      options: "who can we blame",
      answer: "c",
    }];


function startQuestions() {
  console.log(questions.length);
  for (var i = 0; i < questions.length; i++) {
    var y = questions[i];
    vex.dialog.prompt({
      message: questions[i].message,
      placeholder: questions[i].options,
      callback: function (value) {
        checkAnswer(value);
      }
    });
  function checkAnswer(x, y){
  if (x === y) {
      console.log("okay");
     }}
    
  }
}




//need a variable that stores the new number of seconds
//this is decremented by 30 and then is set as the secondsLeft variable

// this function initializes the timer
function setTime() {
  // The timer is set to count down the seconds using secondsLeft--, 
  //and display the seconds remaining at each interval
  timerInterval = setInterval(function () {
    secondsLeft -= 1;
    timeEl.textContent = secondsLeft;
    console.log(secondsLeft);
    //Time is up when timer reaches zero. 
    if (secondsLeft < 1) {
      endGame();
     /*  timeEl.textContent = 0;
      clearInterval(timerInterval); */
    }
    // 1000 milliseconds equals 1 second, so our timer counts down by 1 second
  },
    1000);
}  


function startTime() { 
  console.log("start");
  // Eventually want to put 15 minutes here: 60 * 15
  // "+1" ensures countdown does not start at one second less than timer duration
  //var secondsLeft = 10 + 1;  
 setTime(); 
 setTimeout(() => {startQuestions(); }, 1000);
} 
 


function userScore() {
  score++;
  scoreEl.textContent = score;
  console.log("score");
} 

function userPenalty() {
  secondsLeft -= 15;
}
 
function endGame() {
  timeEl.textContent = 0;
  clearInterval(timerInterval);
  vex.dialog.prompt({
    message: "You scored " + score + " points!",
    placeholder: "Enter your initials and go to the leaderboard!",
    callback: function (value) {
      var userInfo = {
        User: value,
        Score: score,
      }
      window.localStorage.setItem('user', JSON.stringify(userInfo));
      console.log(window.localStorage.getItem('user'));
      //open new window to leaderboard or new modal to leaderboard
    }
  });
} 
/* wrongAnswer.addEventListener("Wrong Answer", wrongEventHandler, true); */
/* leaderBtn.addEventListener("click", openLeaderboard); */
startBtn.addEventListener("click", startTime);
