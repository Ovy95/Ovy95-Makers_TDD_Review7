//Review Code
class SchoolReport {
  //grades
  grades(grades) {
    let  gradesArray = grades.split(",");

var redCounter = 0;
var amberCounter  = 0;
var greenCounter = 0;

    for (let index = 0; index < gradesArray.length; index++) {
       let grade = parseInt(gradesArray[index]);
      if(grade <= 49){
        redCounter++
      }else if(grade > 49 && grade <75){
        amberCounter++
      }else if(grade > 74 && grade <101){
        greenCounter++
      }
    }
    return this.gradingstring(redCounter,amberCounter,greenCounter)
  }

  gradingstring(red,amber,green){
   var reportArray = []
    if (green >0) {
      reportArray.push("Green: "+`${green}`)
    }
    if(amber >0){
      reportArray.push("Amber: "+`${amber}`)
    }
    if(red >0){
      reportArray.push("Red: "+`${red}`)
    }
    var finalReportString=""
    for (let index = 0; index < reportArray.length; index++) {
      finalReportString+=reportArray[index];
      if(reportArray.length > 1 && index < 2 ){
        finalReportString+="\n"
      }
    }
    return finalReportString
  }
}