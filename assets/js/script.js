// variables
var gameClock = document.getElementById("timer");

var introCard = document.getElementById("intro-card");

var quizCard = document.getElementById("quiz-card");
var questionsEl = document.getElementById("questions");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var resultsEl = document.getElementById("choice-result");

var userScoreCard = document.getElementById("user-score-card");
var userScore = document.getElementById("user-score");
var userInitials = document.getElementById("initials");
var submitScore = document.getElementById("submit-initials");

var highScoresCard = document.getElementById("high-scores-card");
var pastScores = document.getElementById("past-scores");
var playerInitials = document.getElementById("player-initials");
var playerScore = document.getElementById("player-score");
var gameBtns = document.getElementById("game-btns");




// quiz questions & answers via https://www.w3schools.com/js/js_quiz.asp 
var quizQuestions = [{
    question: "Inside which element do we put the JavaScript?",
    choiceA: "&lt;js&gt;",
    choiceB: "&lt;script&gt;",
    choiceC: "&lt;javascript&gt;",
    choiceD: "&lt;scripting&gt;",
    correctAnswer: "b"},
    {
    question: "How do you write an IF statement in JavaScript?",
    choiceA: "if (i == 5)",
    choiceB: "if i == 5 then",
    choiceC: "if i = 5",
    choiceD: "if i = 5 then",
    correctAnswer: "a"},
    {
    question: "Which event occurs when the user clicks on an HTML element?",
    choiceA: "onmouseclick",
    choiceB: "onchange",
    choiceC: "onmouseover",
    choiceD: "onclick",
    correctAnswer: "d"},
    {
    question: "Which operator is used to assign a variable?",
    choiceA: "=",
    choiceB: "*",
    choiceC: "-",
    choiceD: "x",
    correctAnswer: "a"},
    {
    question: "How does a FOR loop start?",
    choiceA: "for i = 1 to 5",
    choiceB: "for (i = 0; i <= 5)",
    choiceC: "for (i = 0; i <= 5; i++)",
    choiceD: "for (i <= 5; i++)",
    correctAnswer: "c"}];

// generate questions & answers

// start timer, display first question

// check answers

// display results

// user submits score, add score to high scores list

// generate new high score list

// display high scores

// clear high scores list

// start quiz