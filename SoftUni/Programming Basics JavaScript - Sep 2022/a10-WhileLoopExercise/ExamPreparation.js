// Напишете функция, в която Марин решава задачи от изпити докато не получи съобщение "Enough" от лектора си. При всяка решена задача той получава оценка. Функцията трябва да приключи прочитането на данни при команда "Enough" или ако Марин получи определеният брой незадоволителни оценки.
// Незадоволителна е всяка оценка, която е по-малка или равна на 4.
// Вход
// •	На първи ред - брой незадоволителни оценки - цяло число в интервала [1…5]
// •	След това многократно се четат по два реда:
// o	Име на задача - текст (низ)
// o	Оценка - цяло число в интервала [2…6]
// Изход
// •	Ако Марин стигне до командата "Enough", отпечатайте на 3 реда: 
// o	"Average score: {средна оценка}"
// o	"Number of problems: {броя на всички задачи}"
// o	"Last problem: {името на последната задача}"
// •	Ако получи определеният брой незадоволителни оценки:
// o	"You need a break, {брой незадоволителни оценки} poor grades."
// Средната оценка да бъде форматирана до втория знак след десетичната запетая. 


function examPreparation(input) {
    let badGrades = Number(input.shift());
    let task = input.shift();
    let grade = Number(input.shift());
    let counter = 0;
    let sum = 0;
    let lastTask = "";
    let badCounter = 0;

    while (task != "Enough") {
        if (grade <= 4) {
            badCounter++;
        }
        if (badCounter == badGrades) {
            console.log(`You need a break, ${badCounter} poor grades.`);
            break;
        }
        sum += grade;
        counter++;
        lastTask = task;
        task = input.shift();
        grade = Number(input.shift());
    }
    if (task == "Enough") {
        console.log(`Average score: ${(sum / counter).toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        console.log(`Last problem: ${lastTask}`);
    }
}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
