describe("Text world", function() {
    it("says world", function() {
        expect(QuizFeatures.quizQuestions[0].question).toContain("Who");
    });
});