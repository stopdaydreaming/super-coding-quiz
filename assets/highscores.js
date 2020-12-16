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

function submit() {
    topBarEl.classList.add('hide');
    hsInitialsEl.classList.add('hide');
    submitBtnEl.classList.add('hide');
}

submitBtnEl.addEventListener("click", submit) ;