var QuizFeatures = {
  init: function() {
    var self = this
    self.button()
    self.createSkeleton(0)
    QuizFeatures.checkedItem()
    $("#button1").on("click", function() {
      self.lastQuestion(self.questionNumber);
    })
  },
  checkedItem: function() {
    $("input:checkbox").change(function(){
      var group = ":checkbox[name='"+ $(this).attr("name") + "']";
      if($(this).is(':checked')){
        $(group).not($(this)).attr("checked",false);
      }
    });
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
    var choice = $(':checked')[0].id
      if (choice === QuizFeatures.quizQuestions[num].correctAnswer ) {
        QuizFeatures.changeQuestion(1)
    }
      else {
        QuizFeatures.changeQuestion()
    }
  },
  changeQuestion: function(correct) {
    if (1) {
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
  lastQuestion: function (num) {
    if (QuizFeatures.questionNumber === QuizFeatures.quizQuestions.length -1 ) {
      $('#answers').empty()
      QuizFeatures.markup.questionDisplay.innerHTML = QuizFeatures.score
    }
    else {
        QuizFeatures.checkAnswer(num)
    }
  },

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
      var answer = document.createElement("label");
      var br = document.createElement("br");
      choice.setAttribute("type", "checkbox")
      choice.setAttribute("id", "demo_box_" + i)
      choice.setAttribute("class", "css-checkbox")
      choice.setAttribute("name", "choices")
      answer.setAttribute("class", "css-label")
      answer.setAttribute("for", "demo_box_" + i)
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


