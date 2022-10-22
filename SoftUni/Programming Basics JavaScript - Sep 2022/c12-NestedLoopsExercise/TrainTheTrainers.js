// Курсът "Train the trainers" е към края си и финалното оценяване наближава. Вашата задача е да помогнете на журито,  което ще оценява презентациите, като напишете функция,  която да изчислява средната оценка от представянето на всяка една презентация от даден студент, а накрая средният успех от всички тях.
// От първия елемент на масива се прочита броят на хората в журито n - цяло число в интервала [1…20]
// След това името на презентацията - текст
// За всяка една презентация като нов елемент се чете n - на брой оценки - реално число в интервала [2.00…6.00]
// След изчисляване на средната оценка за конкретна презентация, на конзолата се печата
//  "{името на презентацията} - {средна оценка}."
// След получаване на команда "Finish" на конзолата се печата "Student's final assessment is {среден успех от всички презентации}." и програмата приключва.
// Всички оценки трябва да бъдат форматирани до втория знак след десетичната запетая.


function trainTheTrainers(input) {
    let n = Number(input.shift());
    let presentation = input.shift();
    let sumGrades = 0;
    let sumGradesAll = 0;
    let counter = 0;
    while (presentation !== "Finish") {
        for (let i = 1; i <= n; i++) {
            let grade = Number(input.shift());
            sumGrades += grade;
            sumGradesAll += grade;
            counter++;
        }
        console.log(`${presentation} - ${(sumGrades / n).toFixed(2)}.`);
        sumGrades = 0;
        presentation = input.shift();
    }
    console.log(`Student's final assessment is ${(sumGradesAll / counter).toFixed(2)}.`);
}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);