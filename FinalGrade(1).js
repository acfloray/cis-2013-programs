//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW points (0-30):"));

floatMidPts = parseFloat(prompt("Please enter midterm points (0-35):"));

floatFinPts = parseFloat(prompt("Please enter final points (0-35):"));

floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);

intGradeOption = parseInt(prompt("Enter 1 for pass/fail grading or another number for a letter grade"));

if (intGradeOption===1) {
    if(floatTotalPts >= 80)
    {
        stringMessage = "Pass";
    }
        else {
            stringMessage = "Fail";
        }
}
if (intGradeOption!==1) {
    if (floatTotalPts >= 90) {
        stringMessage = "A";
    } else {
        if (floatTotalPts >= 80 && floatTotalPts <90) {
            stringMessage = "B";
        } else {
            if (floatTotalPts >= 70 && floatTotalPts <80) {
                stringMessage = "C";
            } else {
                if (floatTotalPts >= 60 && floatTotalPts <70) {
                    stringMessage = "D";
                } else {
                    stringMessage = "D";
                }
            }
        }
    }    
}

alert("Your final grade is: " +stringMessage);
