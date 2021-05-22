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
var playerScores = document.getElementById("player-score");
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
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;


function generateQuiz() {
    userScoreCard.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex) {
        return showScore();
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "<p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
}

// start quiz & timer, display first question
var secondsLeft = 60;
var timerInterval;
var score = 0;
var correct;

function startQuiz() {
    userScoreCard.style.display = "none";
    introCard.style.display = "none";
    highScoresCard.style.display = "none";
    generateQuiz();

    timerInterval = setInterval(function() {
        secondsLeft--;
        gameClock.textContent = "Seconds left: " + secondsLeft;
    
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
    quizCard.style.display = "block";
}

// check answers
function correctAnswer() {
    var correctNotify = document.createElement("div");
    correctNotify.setAttribute("class", "right-answer")
    correctNotify.setAttribute("style", "color: green; font-weight: bold;");
    correctNotify.textContent = "That's correct!";
    quizCard.appendChild(correctNotify);
}

function checkAnswer(answer) {
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
        score++;
        correctAnswer();
        /* alert("That's correct!") */
        currentQuestionIndex++;
        generateQuiz();
    } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        alert("That's wrong!");
        secondsLeft -= 10;
        currentQuestionIndex++;
        generateQuiz();
    } else {
        showScore();
    }
}

// display results
function showScore() {
    quizCard.style.display = "none";
    userScoreCard.style.display = "flex";
    clearInterval(timerInterval);
    userInitials.value = "";
    userScore.innerHTML = "You answered " + score + "/" + quizQuestions.length + " questions correctly.";
}


// user submits score, add score to high scores list
submitScore.addEventListener("click", function highscore() {
    if (userInitials.value === "") {
        alert("Please add your initials.");
        return false;
    } else {
        savedHighScores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
        var currentPlayer = userInitials.value.trim();
        var currentHighScore = {
            name: currentPlayer,
            score: secondsLeft
        };

        userScoreCard.style.display = "none";
        highScoresCard.style.display = "flex";
        pastScores.style.display = "block";
        gameBtns.style.display = "flex";

        savedHighScores.push(currentHighScore);
        localStorage.setItem("savedHighScores", JSON.stringify(savedHighScores));
        generateHighScores();
    }

});

// generate new high score list
function generateHighScores() {
    playerInitials.innerHTML = "";
    playerScores.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
    for (i = 0; i < highscores.length; i++) {
        var newName = document.createElement("li");
        var newScore = document.createElement("li");
        newName.textContent = highscores[i].name;
        newScore.textContent = highscores[i].score;
        playerInitials.appendChild(newName);
        playerScores.appendChild(newScore);
    }
}

// display high scores
function viewHighScores() {
    introCard.style.display = "none";
    userScoreCard.style.display = "none";
    quizCard.style.display = "none";
    highScoresCard.style.display = "flex";
    pastScores.style.display = "block";
    gameBtns.style.display = "flex";

    generateHighScores();
}

// clear high scores list
function clearScores() {
    window.localStorage.clear();
    playerInitials.textContent = "";
    playerScores.textContent = "";
}

// start quiz