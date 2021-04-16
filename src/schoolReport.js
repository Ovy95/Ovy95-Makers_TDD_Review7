//Review Code
class SchoolReport {
  //grades
  grades(results) {
    let  resultsArray = results.split(",");

var redCounter = 0;
var amberCounter  = 0;
var greenCounter = 0;

    for (let index = 0; index < resultsArray.length; index++) {
       let grade = parseInt(resultsArray[index]);
      
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
   var report = []
    if (green >0) {
      report.push("Green: "+`${green}`)
    }
    if(amber >0){
      report.push("Amber: "+`${amber}`)
    }
    if(red >0){
      report.push("Red: "+`${red}`)
    }



    return report[0]
  }
}