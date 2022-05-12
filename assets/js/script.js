var rules = document.getElementById("rules");
var start = document.getElementById("start-button");
var questions = document.querySelectorAll(".questions");
var qone = document.getElementById("qone");
var qtwo = document.getElementById("qtwo");
var qthree = document.getElementById("qthree");
var qfour = document.getElementById("qfour");
var qfive = document.getElementById("qfive");
var answerone = document.querySelectorAll(".qone-answers");
var answertwo = document.querySelectorAll(".qtwo-answers");
var answerthree = document.querySelectorAll(".qthree-answers");
var answerfour = document.querySelectorAll(".qfour-answers");
var answerfive = document.querySelectorAll(".qfive-answers");
var allDone = document.getElementById("all-done");
var correctAnswers = document.querySelectorAll(".correct");
var incorrectAnswers = document.querySelectorAll(".incorrect");
var incorrectmark = document.getElementById("incorrect");
var correctmark = document.getElementById("correct");
var score = document.getElementById("score");
var userinitials = document.getElementById("user-initials");
var timeEl = document.getElementById("time");
var timeLeft = 80;

for (var i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswers[i].addEventListener("click", function() {
        timeLeft -= 10;
        timeEl.textContent = timeLeft;
        score.textContent = timeLeft;
        if (timeLeft < 0) {
            timeLeft = 0;
            timeEl.textContent = timeLeft;
            score.textContent = timeLeft;
        }
    });
}

function setTime() {
    var timer = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            timeLeft = 0;
        }

        if (timeLeft === 0 || timeLeft < 0) {
            clearInterval(timer);
            for (var i = 0; i < questions.length; i++) {
                questions[i].setAttribute("style", "display: none");
            }
            allDone.setAttribute("style", "display: block"); 
        }

        timeEl.textContent = timeLeft;
        score.textContent = timeLeft;
    }, 1000);
}

answerone.forEach(item => {
    item.addEventListener("click", function() {
        qone.setAttribute("style", "display: none");
        qtwo.setAttribute("style", "display: block");
    });
});

answertwo.forEach(item => {
    item.addEventListener("click", function() {
        qtwo.setAttribute("style", "display: none");
        qthree.setAttribute("style", "display: block");
    });
});


answerthree.forEach(item => {
    item.addEventListener("click", function() {
        qthree.setAttribute("style", "display: none");
        qfour.setAttribute("style", "display: block");
    });
});



answerfour.forEach(item => {
    item.addEventListener("click", function() {
        qfour.setAttribute("style", "display: none");
        qfive.setAttribute("style", "display: block");
    });
});

answerfive.forEach(item => {
    item.addEventListener("click", function() {
        qfive.setAttribute("style", "display: none");
        allDone.setAttribute("style", "display: block");
    });
});

answerfive.forEach(item => {
    item.addEventListener("click", function() {   
        clearInterval(timer);
    });
});

incorrectAnswers.forEach(item => {
    item.addEventListener("click", function() {
        incorrectmark.setAttribute("style", "display: block");
        correctmark.setAttribute("style", "display: none");
        setTimeout(function() {
            incorrectmark.setAttribute("style", "display: none");
        }, 700);
    });
});


correctAnswers.forEach(item => {
        item.addEventListener("click", function() {
            correctmark.setAttribute("style", "display: block");
            incorrectmark.setAttribute("style", "display: none");
            setTimeout(function() {
                correctmark.setAttribute("style", "display: none");
            }, 700);
        });
});

start.addEventListener("click", function() {
    rules.setAttribute("style", "display: none");
    qone.setAttribute("style", "display: block");
    setTime();
});



var submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function(event) {
    event.preventDefault();


    var userScore = {
        score: timeLeft,
        userinitials: userinitials.value
    };

    var localStorageContent = localStorage.getItem("highScores");

    var highScores;
    if (localStorageContent === null) {
        highScores = [];
    } else {
        highScores = JSON.parse(localStorageContent);
    }
    
    highScores.push(userScore);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.href="assets/highscores.html";
});