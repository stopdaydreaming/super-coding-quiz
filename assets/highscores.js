// ### HIGHSCORES PAGE ###

// console.log("welcome to high scores");
// var initialsAndScore = JSON.parse(localStorage.getItem("initials and score"));
// for(var i =0; i<initialsAndScore.length; i++){
//   //create an element
//   var pEl = document.createElement("p");
//   //give it content
//   // pEl.textContent = initialsAndScore[i].name;
//   // pEl.textContent = initialsAndScore[i].points;
//   pEl.textContent = initialsAndScore[i].name + initialsAndScore[i].points;
//   //append to page
//   highScoresList.append(pEl);
// }

var topBarEl = document.querySelector("#top-bar");
var hsInitialsEl = document.querySelector("#hs-initials");
var submitBtnEl = document.querySelector("#submit-btn");
var scoreboardEl = document.querySelector("#score-board");
var goBackBtnEl = document.querySelector("#go-back");
var clearScoresBtnEl = document.querySelector("#clear-scores");
var playerInitialsEl = document.querySelector("#player-initials");

function submit() {
    // hide user input
    topBarEl.classList.add('hide');
    hsInitialsEl.classList.add('hide');
    submitBtnEl.classList.add('hide');

    scoreboardEl.classList.remove('hide');
    goBackBtnEl.classList.remove('hide');
    clearScoresBtnEl.classList.remove('hide');
}

function clearScores(){
    scoreboardEl.textContent = '';
}

submitBtnEl.addEventListener("click", submit) ;
clearScoresBtnEl.addEventListener("click", clearScores);