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
	{question: "Am I learning anything", choices: ["yes, quite a bit", "no", "there's a possibility"], correctAnswer: 0},
	{question: "will this be the last question?", choices: ["Of course", "no", "It better be"], correctAnswer: 2}
];

// The users answers are stored here
var userAnswers = [];


// Remove quiz summary, and display the first question
$("#begin-quiz").click(function() {
	$(".pre-quiz").addClass("hide");
	$(".quiz-content").removeClass("hide");
	displayQuestion(count)
});

// On submit button click, update 'count', show next Q, or end quiz and show result
$("#submitQ").click(function() {
	if ($('form input[type=radio]:checked').val() == allQuestions[count].correctAnswer) {
		userAnswers.push("correct");
		console.log(userAnswers); // for testing

		if (count <= maxQuestions) {
			$(choices).html("");
			count++;
			displayQuestion(count);
		} else {
			totalQuiz();
		}

	} else {
		userAnswers.push("wrong");
		console.log(userAnswers); // for testing

		if (count <= maxQuestions) {
			$(choices).html("");
			count++;
			displayQuestion(count);
		} else {
			totalQuiz();
		}
	}
});

// Displays question along with choices to user, * pass number of question to this function *
function displayQuestion(qNum) {
	// Set question number and question text
	$(questionNumber).text(qNum + 1);
	$(questionText).text(allQuestions[qNum].question);
	// Loop through choices in question object to display append them to the form element
	for (var i = 0; i < allQuestions[qNum].choices.length; i++) {
		$(choices).append("<input type='radio' name='chooseone' value='" + i + "'><label for='" + i + "'>" + allQuestions[qNum].choices[i] + "</label><br/>");
	}

}

// Adds together all answers that are correct, and displays total & percentage right/wrong
function totalQuiz() {

}