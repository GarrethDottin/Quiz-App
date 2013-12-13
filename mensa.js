// Ways to Refactor
//
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
  init: function(questionNumber) {
    this.button()
    this.createSkeleton(0)
    $("#button1").on("click", function() {
  alert("this is working")})

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
  quizQuestions: [{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer:"5"},{question: "Who is President of the United States?", choices: ["George Bush", "Dave Chappelle", "Barack Obama ", "Jane Doe"], correctAnswer:"7"}, {question: "Who is President of the Republic of South Africa", choices: ["George Bush", "Dave Chappelle", "Barack Obama ", "Rick Ross"], correctAnswer:"6"} ],
  score: 0,
  createSkeleton: function(num) {
    for (var i = 0; i < QuizFeatures.quizQuestions[num].choices.length; i++) {
      var choice = document.createElement("input");
      var answer = document.createElement("text");
      var br = document.createElement("br");
      choice.setAttribute("type", "radio")
      choice.setAttribute("id",  i)
      answer.setAttribute("id", i + "answer")
      this.markup.answer.appendChild(choice)
      this.markup.answer.appendChild(answer)
      this.markup.answer.appendChild(br)
      createNextQuestion(num, i)
    }
  }
}
QuizFeatures.init(questionNumber)

function createNextQuestion(num, i) {
  var questionDisplay = document.getElementById('question-display')
  answerDisplay = document.getElementById(i + "answer")
  questionDisplay.innerHTML = QuizFeatures.quizQuestions[num].question
  answerDisplay.innerHTML = QuizFeatures.quizQuestions[num].choices[i]

 }

  // var choice = $(':checked')[0].id
  // if (choice === QuizFeatures.quizQuestions[questionNumber].correctAnswer) {
  //   questionNumber++
  //   QuizFeatures.score++
  //   $('#answers').empty()
  //   QuizFeatures.createSkeleton(questionNumber)
  //   createNextQuestion(questionNumber)
  // }

