/*Write a function called "convertScoreToGradeWithPlusAndMinus".

Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (59  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
* If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
* If the score is between the 8 and 9 (inclusive) of a given range, return the letter with a '+'
* There are is no F+ and there is no F-.

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'


Starter Code :*/
function convertScoreToGradeWithPlusAndMinus(score) {
  let sign = "";
  let grade = "";
  if (score > 100 || score <0) {
    return ("INVALID SCORE");
  }
  if (score >= 60) {
    let arrayValue = score.toString().split("");
    let secondValue = parseInt(arrayValue[1]);
    if (secondValue>=8 || score === 100) {
      sign = "+";
    } 
    else if (secondValue<=2) {
      sign = "-";
    }
  }

  if (score >= 90) {
    grade = "A";
  }
  else if (score >= 80) {
    grade = "B";
  }
  else if (score >= 70) {
    grade = "C";
  }
  else if (score >= 60) {
    grade = "D";
  }
  else {
    grade = "F";
  }

  return(grade+sign);
}
var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'