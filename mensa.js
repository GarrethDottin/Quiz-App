// function that increases question number  COMPLETE
// Function that handles correct COMPLETE
//
// function that checks if its at the last question
// Function that display new data
var QuizFeatures = {
  init: function() {
    var self = this
    self.button()
    self.createSkeleton(0)
    $("#button1").on("click", function() {
      self.checkAnswer(self.questionNumber);
    })
  },
  questionNumber: 0,
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
  checkAnswer: function(num) {
    console.log("This is actually hit")
    var choice = $(':checked')[0].id
    if (choice === QuizFeatures.quizQuestions[num].correctAnswer ) {
      QuizFeatures.changeQuestion(correct)
    }
    else {
      QuizFeatures.changeQuestion()
    }
  },
  changeQuestion: function(correct) {
    if (correct) {
      QuizFeatures.score++
      QuizFeatures.questionNumber++
      $('#answers').empty()
      QuizFeatures.createSkeleton(QuizFeatures.questionNumber)

    }
    else {
      QuizFeatures.questionNumber++
      $('#answers').empty()
      QuizFeatures.createSkeleton(QuizFeatures.questionNumber)

    }

  },
  lastQuestion: function () {
    if (QuizFeatures.questionNumber === QuizFeatures.quizQuestions[0].length )
      $('#answers').empty()
      QuizFeatures.markup.questionDisplay.innerHTML = QuizFeatures.score
    }
  }

  button: function () {
    this.markup.formButton.setAttribute("id", "button1")
    this.markup.formButton.innerHTML = "next"
    this.markup.addButton.appendChild(this.markup.formButton)
    },
  quizQuestions: [{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer:"0"},{question: "Who is President of the United States?", choices: ["George Bush", "Dave Chappelle", "Barack Obama ", "Jane Doe"], correctAnswer:"2"}, {question: "Who is President of the Republic of South Africa", choices: ["George Bush", "Dave Chappelle", "Barack Obama ", "Rick Ross"], correctAnswer:"3"} ],
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
      this.createNextQuestion(num, i)
    }
  },
  createNextQuestion: function (num, i) {
    var questionDisplay = document.getElementById('question-display')
    answerDisplay = document.getElementById(i + "answer")
    questionDisplay.innerHTML = QuizFeatures.quizQuestions[num].question
    answerDisplay.innerHTML = QuizFeatures.quizQuestions[num].choices[i]
  }
}

QuizFeatures.init()


