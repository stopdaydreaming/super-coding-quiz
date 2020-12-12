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

var startContentEl = document.querySelector("#start-content");

var timerEl = document.querySelector("#timer");
var startQuizEl = document.querySelector("#start-quiz");

var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answer");
var quizContentEl = document.querySelector("#quiz-content");

// OBJECT I WANT TO ITERATE THROUGH
var currQuestionIndex = 0;
timerEl.textContent = 0;

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

function showQuestion(currQuestionIndex){
    var printQuestion = quiz[currQuestionIndex].question;
    questionEl.textContent = printQuestion;
    console.log("Question here: " + printQuestion);

    for(var i = 0; i < quiz[currQuestionIndex].answers.length; i++ ) {
      var a = document.createElement('button');
      a.classList.add('btn', 'btn-primary', 'btn-sm');
      a.textContent = quiz[currQuestionIndex].answers[i];
      console.log(quiz[currQuestionIndex].answers[i]);
      answersEl.appendChild(a);
      // event listener for button, which button did i click
      // if statement, currQuestionIndex++
    }
}

function startQuiz(){
    startContentEl.classList.add('hide');
    quizContentEl.classList.remove('hide');
    showQuestion(0);
}

function nextQuestion(){}

function selectAnswer(){}

startQuizEl.addEventListener("click", startQuiz);
// NEED TO FIX: highscores page has this error "scripts.js:86 Uncaught TypeError: Cannot read property 'addEventListener' of null" because start quiz doesnt exist here