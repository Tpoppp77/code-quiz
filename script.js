var userChoice ="";
var time = 60;
var score = 0;
var wins = 0;
var losses = 0;
var answers = true;
var timer = document.getElementById("timer")
var buttonEl = document.getElementById("b1");
var questionDisplay = document.getElementById("questions")
var questions = [
    {
        question: "Arrays in javaScript can be used to store",
        choices: ["Strings", "Numbers", "Boolean", "All of the above"],
        answers: "All of the above",
    },

    {
        question: "Which of the following functions of a String object converts it to lower case?",
        choices: ["toLocaleLowerCase()", "toLowerCase()", "toString()", "toUpperCase()"],
        answers: "toLowerCase",
    },

    {
        question: "What programming language modifies the DOM?",
        choices: ["jQuery", "CSS", "HTML", "JavaScript"],
        answers: "JavaScript",
    },

    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheet", "Complex Style Syntax", "Complete Sound Sheet", "Christian Social Services"],
        answers: "Cascading Style Sheet",
    },

    {
        question: "What does HTTP mean?",
        choices: ["HyperText Transit Protocol", "HyperText Transfer Protocol", "HyperText Transfer Program", "Head To This Page"],
        answers: "HyperText Transfer Protocol",
    },
];

buttonEl.addEventListener("click", function (){
    startQuiz();
    renderQuestion();
    startTimer();
    time--;
})

function startQuiz() {
    buttonEl.classList.add("#b1");

}

function renderQuestion () {
    questionDisplay.textContent = questions[0].question;
   
}


function startTimer() {

    if (choices === true) {
        wins++;
    } else {
        losses--;
    }

}

for (var i = 0; i < questions[currentquestion].choices.length; i++) {
    var button = document.createElement("button");
    button.innerText = questions[currentquestion].choices[i];
    questionsarea.appendChild(button);
}