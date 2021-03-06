// Review SPEC 

describe("SchoolReport", function () {

  var schoolReport
  beforeEach(function(){
    schoolReport = new SchoolReport();
  })

  describe("Grading single values tests ",function () {
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

  describe("Grading two values tests",function () {

    it("Given a value between 0-49 returns red: 2",function() {
      expect(schoolReport.grades("10,30")).toEqual("Red: 2")
    })

    it("Given a value between 0-49 returns Amber: 2",function() {
      expect(schoolReport.grades("50,74")).toEqual("Amber: 2")
    })
    it("Given a value between 76-100 returns Green: 2",function() {
      expect(schoolReport.grades("100,80")).toEqual("Green: 2")
    })

  })

  describe("Grading values tests more then three grades at different levels",function () {

    it("Given a value of 10,50,80 returns// Green: 1 Amber: 1 Red: 1 ",function() {
      expect(schoolReport.grades("10,50,80")).toEqual("Green: 1\nAmber: 1\nRed: 1")
    })
    it("Given a value of 1,10,45,60,80,100 returns// Green: 2\nAmber: 1\nRed: 3 ",function() {
      expect(schoolReport.grades("1,10,45,60,80,100")).toEqual("Green: 2\nAmber: 1\nRed: 3")
    })
   
  })


})