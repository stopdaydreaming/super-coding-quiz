// WHEN I click the start button
  // **coding quiz intro hides
// THEN a timer starts and I am presented with a question
  // **first question and answer options display
  // **timer starts countdown
    // how much time does the user have to complete the quiz?
// **WHEN I answer a question
// **THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
  // **check for the answer chosen
  // **is the answer correct?
    // **TRUE 
      // display "correct" status message
      // **go to next question
    // FALSE 
      //display "wrong" status message
      //subtract 10 from timer countdown and got to next question
      //**go to next question
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
  //**go to the highscores page
  //**user input initials
  //**user can go back or clear scores

var startContentEl = document.querySelector('#start-content');

var timerEl = document.querySelector('#timer');
var startQuizEl = document.querySelector('#start-quiz');

var questionEl = document.querySelector('#question');
var answersEl = document.querySelector('#answer');
var quizContentEl = document.querySelector('#quiz-content');
var answerFeedbackEl = document.querySelector('#answer-feedback');

var correctEl = document.querySelector('#correct');
var wrongEl = document.querySelector('#wrong');

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

// OBJECT I WANT TO ITERATE THROUGH
var currQuestionIndex = 0;
timerEl.textContent = 0;

var quiz = [
  {
    question: 'Commonly used data types DO NOT include:',
    answers: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
    corrAnswer: '2. booleans'
  },
  {
    question: 'The condition in an if/else statement is enclosed within ______',
    answers: ['1. quotes', '2. curly braces', '3. parenthesis', '4. square brackets'],
    corrAnswer: '2. curly braces'
  },
  {
    question: 'Arrays in JavaScript can be used to store',
    answers: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
    corrAnswer: '3. booleans'
  },
  {
    question: 'String values must be enclosed within _______ when being assigned to variables.',
    answers: ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
    corrAnswer: '1. commas'
  }
];

function showQuestion(){
    var printQuestion = quiz[currQuestionIndex].question;
    questionEl.textContent = printQuestion;
    answersEl.innerHTML = '';
    for(var i = 0; i < quiz[currQuestionIndex].answers.length; i++ ) {
      //create button from object
      var a = document.createElement('button');
      a.classList.add('btn', 'btn-purple', 'btn-sm', 'mb-1');
      a.textContent = quiz[currQuestionIndex].answers[i];
      answersEl.appendChild(a);
      a.addEventListener('click', checkAnswer);
      // create break between buttons
      var br = document.createElement('br');
      answersEl.appendChild(br);
    }
    correctEl.classList.add('hide');
    wrongEl.classList.add('hide');
}

function startQuiz(){
  startContentEl.classList.add('hide');
  quizContentEl.classList.remove('hide');
  startTimer();
  showQuestion(0);
}

function endQuiz(){
  window.open('./highscores.html', '_self');
}

function checkAnswer(){
  var x = event.target.textContent;
  var y = quiz[currQuestionIndex].corrAnswer;
  answerFeedbackEl.classList.remove('hide');
  if(x == y){
    // correct answer feedback
    wrongEl.classList.add('hide');
    correctEl.classList.remove('hide');
  }
  else {
    //wrong answer feedback
    correctEl.classList.add('hide');
    wrongEl.classList.remove('hide');
    totalSeconds = totalSeconds - 10;
    //totalSeconds -= 10; //condensed
  }

}

function nextQuestion(answer){
  if(currQuestionIndex >= (quiz.length)-1){
    endQuiz();
  } else {
    currQuestionIndex++;
    setTimeout(showQuestion, 1000);
  }
}

function initTimer(){
  clearInterval(interval);
  totalSeconds = 1 * 60;
}

function startTimer() {
  initTimer();
  interval = setInterval(function() {
    if(totalSeconds > 0) {   
      totalSeconds--;
      timerEl.textContent = getSeconds(totalSeconds);
    }
  }, 1000);
  answersEl.addEventListener("click", nextQuestion);
}

function getSeconds(time) {
  var seconds = time % 60;
  return seconds;
}

startQuizEl.addEventListener('click', startQuiz);