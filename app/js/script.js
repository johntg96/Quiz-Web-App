// script.js

var questionNumber = document.querySelector("#question-number");
var questionText = document.querySelector("#question-text");
var choices = document.querySelector("#choices");

// All questions are stored here
var allQuestions = [
	{question: "Is this quiz working?", choices: ["yes", "no", "maybe so"], correctAnswer: 0},
	{question: "Am I learning anything", choices: ["yes, a fuckton", "no", "there's a possibility"], correctAnswer: 0},
	{question: "will this be the last question?", choices: ["Of course", "no", "It better be"], correctAnswer: 2}
];

// Remove quiz summary, and display the first question
$("#begin-quiz").click(function() {
	$(".pre-quiz").addClass("hide");
	$(".quiz-content").removeClass("hide");
});