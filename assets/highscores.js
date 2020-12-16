// ### HIGHSCORES PAGE ###
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
  //**go to the highscores page
  //**user input initials
  //**user can go back or clear scores

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

    getInitials();
}

function getInitials() {
    var initials = document.querySelector("#hs-initials").value;
    localStorage.setItem('initials', initials);
    var storedInitials = localStorage.getItem("initials");
    scoreboardEl.textContent = storedInitials;
    
    for(var i = 0; i < initials.length; i++){
        var pEl = document.createElement("p");
        pEl.textContent = initials;
        // scoreboardEl.append(pEl);
    }
}

function clearScores(){
    scoreboardEl.textContent = '';
}

submitBtnEl.addEventListener("click", submit) ;
clearScoresBtnEl.addEventListener("click", clearScores);
