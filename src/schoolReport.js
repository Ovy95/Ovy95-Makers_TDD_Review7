//Review Code
class SchoolReport {

  grades(results) {
     let grade = parseInt(results)


    if(grade <= 49){
      return "Red: 1"

    }else if(grade > 49 && grade <75){
      return "Amber: 1"
    }else if(grade > 74 && grade <100){
      return "Green: 1"
    }
  }
}