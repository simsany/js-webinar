/**
 * The function returns the grade (1-5) of the student,
 * based on the score and the following rules:
 *  - 90 -    : 5
 *  - 80 - 89 : 4
 *  - 70 - 79 : 3
 *  - 60 - 69 : 2
 *  -    - 59 : 1
 *
 * @param {number} score (0 <= score <= 100)
 * @returns {number} grade or 0 if any arguments are not proper
 */
function grade(score) {
      /*
     * Your task is to calculate the grade of the student
     * based on his/her score which can be found in the
     * score variable and those rules can be found in the
     * documentation of the function.
     * Store the grade in the gradeOfStudent variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
    let gradeOfStudent;
    if (!Number(score) ||score < 0 || score > 100){
        return 0
    }
    switch (true) {
        case score<60:
          gradeOfStudent = 1;
          break;
        case score<70:
          gradeOfStudent = 2;
          break;
        case score<80:
          gradeOfStudent = 3;
          break;
        case score<90:
          gradeOfStudent = 4;
          break;
        default:
          gradeOfStudent = 5;
    }
      


	  return gradeOfStudent;
    // ...AND THIS COMMENT LINE!
    
}


module.exports = grade;