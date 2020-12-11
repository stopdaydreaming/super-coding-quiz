// # 04 Web APIs: Code Quiz

// ## Your Task
// build a timed coding quiz with multiple-choice questions that runs in the browser

// ## User Story
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// ## Acceptance Criteria
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//console.log("hello");
var startTitle = document.querySelector("#start-title");
var startContent = document.querySelector("#start-content");

var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#start-quiz");

var question = document.querySelector("#question");
var answers = document.querySelector("#answer");

var quiz = {
    question: "Question",
    answers: ['ans1', 'ans2', 'ans3'],
    corrAnswer: 1
}
//console.log(quiz);

function startQuiz(){

    startTitle.style.display="none";
    startContent.style.display="none";
    startBtn.style.display="none";
    
    //start quiz; start loop through array of objects
    var q = document.createElement('p');
    q.textContent = quiz.question;
    question.appendChild(q);
    // console.log(quiz);

    for(var i = 0; i < quiz.answers.length; i++ ) {
        var a = document.createElement('button');
        a.classList.add('btn', 'btn-info');
        a.textContent = quiz.answers[i];
        answers.appendChild(a);
    }
}

function generateAnswers() {
    
}

startBtn.addEventListener("click", startQuiz);