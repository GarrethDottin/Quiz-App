Releases
-Change internal logic so its not necessary to change the correct Answer  or use + 5 to similuate the difference between the text id and button id
-Add Score Keeper
-Implement Tests
-Add Tracking Bar to show progress
-Include Backend to Store
   I. User Data
   II. Data on Geniuses
-Implement Design


var QuizFeatures = {
  init: function() {
    this.button()

  },
  button: function () {
    var addButton = document.getElementById("button")
    var formButton = document.createElement("Button")
    formButton.setAttribute("id", "button")
    formButton.innerHTML = "next"
    addButton.appendChild(formButton)
    },
  quizQuestions: [{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer:"5"},{question: "Who is President of the United States?", choices: ["George Bush", "Dave Chappelle", "Barack Obama ", "Jane Doe"], correctAnswer:"6"}, {question: "Who is President of the Republic of South Africa", choices: ["George Bush", "Dave Chappelle", "Barack Obama ", "Rick Ross"], correctAnswer:"6"} ],
  score: 0
}
QuizFeatures.init()

var questionNumber = 0
createSkeleton = function() {
  for (var i = 0; i < QuizFeatures.quizQuestions[questionNumber].choices.length; i++) {
    var questionDisplay = document.getElementById('question-display')
    var answer = document.getElementById("answers")
    var answerDisplay = document.createElement("text")
    var quizChoice = document.createElement("input")
    var br = document.createElement("br");
    quizChoice.setAttribute("type", "radio")
    quizChoice.setAttribute("name", "choice")
    quizChoice.setAttribute("type", "radio")
    quizChoice.setAttribute("name", "choice")
    quizChoice.setAttribute("id",  i + 5)
    answerDisplay.setAttribute("id", i)
    answer.appendChild(quizChoice)
    answer.appendChild(answerDisplay)
    answer.appendChild(br)
  }
}


createNextQuestion = function(questionNumber) {
  for (var i = 0; i < QuizFeatures.quizQuestions[questionNumber].choices.length; i++) {
    var questionDisplay = document.getElementById('question-display')
    answerDisplay = document.getElementById(i)
    questionDisplay.innerHTML = QuizFeatures.quizQuestions[questionNumber].question
    answerDisplay.innerHTML = QuizFeatures.quizQuestions[questionNumber].choices[i]
 }
}
createSkeleton();
createNextQuestion(0)

QuizFeatures.button()


$("#button").on("click", function() {
  var choice = $(':checked')[0].id
  if (choice === QuizFeatures.quizQuestions[questionNumber].correctAnswer) {
    questionNumber++
    QuizFeatures.score++
    $('#answers').empty()
    createSkeleton(questionNumber)
    createNextQuestion(questionNumber)
  }
});
