// Review SPEC 

describe("SchoolReport", function () {

  var schoolReport
  beforeEach(function(){
    schoolReport = new SchoolReport();
  })

  describe("Grading tests ",function () {
    it("Given a value between 0-49 returns red",function() {
      expect(schoolReport.grades("10")).toEqual("Red: 1")
    })

  })


})