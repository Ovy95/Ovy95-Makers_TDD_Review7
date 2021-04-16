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

    it("Given a value between 50 -74 returns Amber",function() {
      expect(schoolReport.grades("52")).toEqual("Amber: 1")
    })

    it("Given a value between 75-100 returns Green",function() {
      expect(schoolReport.grades("75")).toEqual("Green: 1")
    })

  })


})