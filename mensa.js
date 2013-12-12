// Ways to Refactor
// -Separate Data Creation from Data binding
    //I. Go over expected behavior of functions
    //II. finish create Skeleton (create elements separate)
// -separate on.click anonymous function
// -add an onload with .init() that calls the listener
// - change markup to a return function
// Features:
// -Add Quiz Score
// -How do I access variables in other properties
//
// Look up other code for scoping COMPLETE
// Change listener
//

var QuizFeatures = {
  init: function() {
    this.button()
  },
  markup:
    {
    addButton: document.getElementById("button"),
    formButton:  document.createElement("Button"),
    questionDisplay: document.getElementById('question-display'),
    answerDisplay: document.createElement("text"),
    quizChoice: document.createElement("input"),
    br:  document.createElement("br"),
    answer: document.getElementById("answers")
  },
  button: function () {
    this.markup.formButton.setAttribute("id", "button1")
    this.markup.formButton.innerHTML = "next"
    this.markup.addButton.appendChild(this.markup.formButton)
    },

  questionMarkup: function(i) {
    console.log(this.markup.answerDisplay)
    this.markup.quizChoice.setAttribute("type", "radio")
    this.markup.quizChoice.setAttribute("id", i)
    this.markup.answer.appendChild(this.markup.quizChoice)
    this.markup.answer.appendChild(this.markup.answerDisplay)
    this.markup.answer.appendChild(this.markup.br)
  },
  quizQuestions: [{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer:"5"},{question: "Who is President of the United States?", choices: ["George Bush", "Dave Chappelle", "Barack Obama ", "Jane Doe"], correctAnswer:"7"}, {question: "Who is President of the Republic of South Africa", choices: ["George Bush", "Dave Chappelle", "Barack Obama ", "Rick Ross"], correctAnswer:"6"} ],
  score: 0,
  createSkeleton: function(num) {
    for (var i = 0; i < QuizFeatures.quizQuestions[questionNumber].choices.length; i++) {
      QuizFeatures.questionMarkup(i)
      QuizFeatures.markup.quizChoice.setAttribute("id",  i)
      QuizFeatures.markup.answerDisplay.setAttribute("id", i)
      QuizFeatures.markup.answer.appendChild(QuizFeatures.markup.quizChoice)
      QuizFeatures.markup.answer.appendChild(QuizFeatures.markup.answerDisplay)
      QuizFeatures.markup.answer.appendChild(QuizFeatures.markup.br)
    }
  }
}
QuizFeatures.init()
var questionNumber = 0

createNextQuestion = function(questionNumber) {
  for (var i = 0; i < QuizFeatures.quizQuestions[questionNumber].choices.length; i++) {
    var questionDisplay = document.getElementById('question-display')
    answerDisplay = document.getElementById(i)
    questionDisplay.innerHTML = QuizFeatures.quizQuestions[questionNumber].question
    answerDisplay.innerHTML = QuizFeatures.quizQuestions[questionNumber].choices[i]
 }
}
  createNextQuestion(0)




$("#button1").on("click", function() {
  alert("this is working")
  // var choice = $(':checked')[0].id
  // if (choice === QuizFeatures.quizQuestions[questionNumber].correctAnswer) {
  //   questionNumber++
  //   QuizFeatures.score++
  //   $('#answers').empty()
  //   QuizFeatures.createSkeleton(questionNumber)
  //   createNextQuestion(questionNumber)
  // }
});
