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

var startContent = document.querySelector("#start-content");

var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#start-quiz");

var question = document.querySelector("#question");
var answers = document.querySelector("#answer");
var questionContent = document.querySelector("#quiz-content");

// OBJECT I WANT TO ITERATE THROUGH
var currQuestionIndex = 0;

var quiz = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
    corrAnswer: 2
  },
  {
    question: "The condition in an if/else statement is enclosed within ______",
    answers: ['1. quotes', '2. curly braces', '3. parenthesis', '4. square brackets'],
    corrAnswer: 2
  },
  {
    question: "Arrays in JavaScript can be used to store",
    answers: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
    corrAnswer: 3
  },
  {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    answers: ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
    corrAnswer: 1
  }
];
function showQuestion(index){
    for(var i = 0; i < quiz[index].answers.length; i++ ) {
        var a = document.createElement('button');
        a.classList.add('btn', 'btn-primary', 'btn-sm');
        a.textContent = JSON.stringify(quiz[0].answers);
        answers.appendChild(a);
    }
}

function startQuiz(){

    startContent.classList.add('hide');
    questionContent.classList.remove('hide');
    
    //start quiz; start loop through array of objects
    var q = document.createElement('p');
    q.textContent = quiz.question;
    question.appendChild(q);

    displayQuestion(currQuestionIndex);
}

function nextQuestion(){}

function selectAnswer(){}

startBtn.addEventListener("click", startQuiz);