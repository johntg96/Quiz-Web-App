// script.js

// DOM selector variables
var questionNumber = document.querySelector("#question-number");
var questionText = document.querySelector("#question-text");
var choices = document.querySelector("#choices");
// Variables
var count = 0;
var maxQuestions = 3;

// All questions are stored here
var allQuestions = [
	{question: "Is this quiz working?", choices: ["yes", "no", "maybe so"], correctAnswer: 0},
	{question: "Am I learning anything", choices: ["yes, a fuckton", "no", "there's a possibility"], correctAnswer: 0},
	{question: "will this be the last question?", choices: ["Of course", "no", "It better be"], correctAnswer: 2}
];

// testing stuff
//var howManyChoices = allQuestions[questionCounter].choices.length;
//alert(howManyChoices);
//alert(allQuestions[0].question);
// end testing stuff

// Remove quiz summary, and display the first question
$("#begin-quiz").click(function() {
	$(".pre-quiz").addClass("hide");
	$(".quiz-content").removeClass("hide");
	displayQuestion(0)
});

// On submit button click, update 'count', show next Q, or end quiz and show result
$("#submitQ").click(function() {
	if (count <= maxQuestions) {
		count++;
		displayQuestion(count);
	} else {
		totalQuiz();
	}
});

// Displays question along with choices to user, * pass number of question to this function *
function displayQuestion(qNum) {
	// Set question number and question text
	$(questionNumber).text(qNum + 1);
	$(questionText).text(allQuestions[qNum].question);

	// Loop through choices in question object to display them as 'li' elements
	for (var i = 0; i < allQuestions[qNum].choices.length; i++) {
		$(choices).text("IT WORKS!");
		console.log("hmm..");
	}

}

// Adds together all answers that are correct, and displays total & percentage right/wrong
function totalQuiz() {

}