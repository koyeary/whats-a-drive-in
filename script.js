var startBtn = document.querySelector("#startBtn");
var timeEl = document.querySelector("#time");
var scoreEl = document.querySelector("#score") 
var score = 0;

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
    q: "Who is the Queen of England?\ a: Elizabeth\ b:Kody Ko\ c: Martha Kelly",
    answer: "a"
  },
  {
    q: "who is Lauren Rantala?\na: my wife\nb: my fiance\nd: the prime minister of finland",
    answer: "a"
  }
]

  
  
function startQuestions() {
  for (var i = 0; i < questions.length; i++) {
    var modalQuestion = questions[i].q;
    var computerAnswer = questions[i].answer;
    vex.dialog.prompt({
      message: modalQuestion,
      placeholder: 'Enter a, b, or c',
      callback: function (value){
       
      if (value === computerAnswer){
      vex.dialog.alert("You were right! Score +1");
      userScore();
    } else {
      vex.dialog.alert("You were wrong! 30 seconds off the clock!");
      secondsLeft-30;
      console.log(secondsLeft);
      timeEl.textContent = secondsLeft;
    }
        /*
        if(value === questions.answer) {
          alert("you got it right");
        } else {
          alert("you got it wrong");
    }    }*/
  }
   });
  }  
} 

function userScore() {
  score++;
  scoreEl.textContent = score;
}


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

/*Starts the countdown with a 1 second delay for the quiz to begin,
so the time element starts to update without being delayed by the first modal*/
function hitStart() {
  console.log("start!");
  setTimeout(() => {startQuestions(); }, 1000);
}

startBtn.addEventListener("click", startTime);



