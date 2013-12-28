describe("Text world", function() {
    it("says world", function() {
        expect(QuizFeatures.quizQuestions[0].question).toContain("Who is Prime Minister of the United Kingdom?");
    });
});

describe("calling of checkAnswer functions", function() {
  beforeEach
  it("calls function checkAnswer", function(){
    spyOn(QuizFeatures, "checkAnswer");
    QuizFeatures.checkAnswer();
    expect(QuizFeatures.checkAnswer).toHaveBeenCalled();

  });

  it ("changes the questionNumber", function(){
      spyOn(QuizFeatures,"checkAnswer").andCallFake(function() {
        QuizFeatures.questionNumber = 0
        QuizFeatures.questionNumber++
      })
      QuizFeatures.checkAnswer(0);
      expect(QuizFeatures.questionNumber).toBeGreaterThan(0);
  })
  it ("changes the questionNumber", function(){
      spyOn(QuizFeatures,"checkAnswer").andCallFake(function() {
       createSkeleton()
      })
      QuizFeatures.checkAnswer(0);
      expect(createSkeleton).toHaveBeenCalled();
  })



})


//Setup Before Each
//