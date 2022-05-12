function init() {
  showScores();
}
var scoreBoard = document.querySelector("#score-board");
function showScores() {
    var lastScore = JSON.parse(localStorage.getItem("highScores"));
    lastScore.sort((a, b) => b.score - a.score);
    
    
for (var i = 0; i < lastScore.length; i++) {
    if (lastScore !== null) {
        var newTag = document.createElement("li");
        scoreBoard.appendChild(newTag);
        newTag.textContent = lastScore[i].initials + " - " + lastScore[i].score;      
    } else {
        return;
    }
    }
}

var back = document.getElementById("back");
back.addEventListener("click", function() {
    window.location.href="../index.html";
})


var clear = document.getElementById("clear");

clear.addEventListener("click", function() {
    scoreBoard.innerHTML = "";
    localStorage.clear();
})

init();