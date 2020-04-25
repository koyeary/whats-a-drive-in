var questions = [
  {
    q: "Who is the Queen of England?\ a: Elizabeth\ b:Kody Ko\ c: Martha Kelly",
    answer: "a"
  },
  {
    q: "who is Lauren Rantala?\na: my wife\nb: my fiance\nd: the prime minister of finland",
    answer: "a"
  }
]
var startBtn = document.querySelector("#startBtn");
var leaderBtn = document.querySelector("#leaderBtn");
var timeEl = document.querySelector("#time");
var scoreEl = document.querySelector("#score"); 
var secondsLeft = questions.length * 15;
var score = 0;


var quizContainer = document.querySelector("#quiz");
var timerInterval;

//an on-click function @ gameOver modal that takes us to the leaderboard

  
function startQuestions() {
  for (var i = 0; i < questions.length; i++) {
    var modalQuestion = questions[i].q;
    var computerAnswer = questions[i].answer;
    vex.dialog.prompt({
      message: modalQuestion,
      placeholder: 'Enter a, b, or c',
      callback: function (value) {
        if (value === computerAnswer) {
          vex.dialog.alert("You were right! Score +1");
          userScore();
        } else if (value != computerAnswer) {
          vex.dialog.alert("You were wrong! 15 seconds off the clock!");
           console.log("penalty");
           userPenalty();
        }
      }
    });
  }
/*   endGame(); */
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
      /*  endGame();} */
      vex.dialog.alert("Game Over!")
      timeEl.textContent = 0;
      clearInterval(timerInterval);
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
  clearInterval(timerInterval);
  vex.dialog.prompt({
    message: "You scored" + score,
    placeholder: "Enter your initials and go to the leaderboard!",
    callback: function (value) {
      timeEl.textContent = 0;
    }
  })
}

/*Starts the countdown with a 1 second delay for the quiz to begin,
so the time element starts to update without being delayed by the first modal*/
/* function hitStart() { */
 /*  setTimeout(() => {startQuestions(); }, 1000);
}
 */
/* wrongAnswer.addEventListener("Wrong Answer", wrongEventHandler, true); */
/* leaderBtn.addEventListener("click", openLeaderboard); */
startBtn.addEventListener("click", startTime);

/* function openLeaderboard {
  
}
 */