var readlineSync = require("readline-sync");

var score = 0;


var userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName + ", to the quiz on Lionel Messi? ");


var questions = [{
  question: "What is his nationality? ",
  answer: "Argentinian"
},
{
  question: "From which club does he play? ",
  answer: "Barcelona"
},
{
  question: "In which year did  Messi made his debut? ",
  answer: "2004"
},
{
  question: "How many Ballon d'Or has Messi won?  ",
  answer: "6"
},
{
  question: "What is Messi's nickname? ",
  answer: "La Pulga"
}]



function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score = score + 1;
  }
  else {
    console.log("Wrong!");
  }
  console.log("Current score is: ", score);
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log(userName + " your final score is: ", score);
}

game();
showScores();