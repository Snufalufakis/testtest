//HTML element refrences
const info_box = document.querySelector(".container");
const nextButton = document.querySelector("nextButton");
const start_btn = document.querySelector(".start_btn button");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");

function Question(text, choice, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}
Question.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
}
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}
Quiz.prototype.getQuestionIndex = function(){
  return this.questions[this.questionIndex];
}
Quiz.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;
}
Quiz.prototype.guess = function(answer) {
  this.getQuestionIndex++;
  
  if(this.getQuestionIndex().correctAnswer(answer)){
    this.score++;
  }
}