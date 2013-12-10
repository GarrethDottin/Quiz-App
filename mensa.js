// 4. Isolate Changing elements
//   I. Question and Choice display change
     // II. input values
     // II. Input types


var QuizFeatures = {
  button: function () {
    var formButton = document.createElement("Button")
    formButton.setAttribute("id", "button")
    formButton.innerHTML = "next"
    var addButton = document.getElementById("button")
    addButton.appendChild(formButton)
    },
  quizQuestions: [{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer:"0"},{question: "Who is President of the United States?", choices: ["George Bush", "Dave Chappelle", "Barack Obama ", "Jane Doe"], correctAnswer:"2"}, {question: "Who is President of the Republic of South Africa", choices: ["George Bush", "Dave Chappelle", "Barack Obama ", "Rick Ross"], correctAnswer:"2"} ],
  score: 0
}
var questionNumber = 0

createNextQuestion = function(questionNumber) {
  for (var i = 0; i < QuizFeatures.quizQuestions[questionNumber].choices.length; i++) {
    var questionDisplay = document.getElementById('question-display')
    var br = document.createElement("br");
    var quizChoice = document.createElement("input")
    var answerDisplay = document.createElement("text")
    var answer = document.getElementById("answers")
    quizChoice.setAttribute("type", "radio")
    quizChoice.setAttribute("name", "choice")
    quizChoice.setAttribute("id",  i)
    quizChoice.setAttribute("value", QuizFeatures.quizQuestions[questionNumber].choices[i])
    answer.appendChild(quizChoice)
    questionDisplay.innerHTML = QuizFeatures.quizQuestions[questionNumber].question
    answerDisplay.innerHTML = QuizFeatures.quizQuestions[questionNumber].choices[i]
    answer.appendChild(answerDisplay)
    answer.appendChild(br)
 }
}
QuizFeatures.button()
createNextQuestion(questionNumber);


$("#button").on("click", function() {
  var choice = $(':checked')[0].id
  if (choice === QuizFeatures.quizQuestions[questionNumber].correctAnswer) {
    questionNumber++
    QuizFeatures.score++
    $('#answers').empty()
    createNextQuestion(questionNumber)
  }
});
