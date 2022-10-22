// Да се напише програма, която чете едно цяло число N, въведено от потребителя, и генерира всички възможни "специални" числа от 1111 до 9999. За да бъде "специално" едно число, то трябва да отговаря на следното условие: 
// •	N да се дели на всяка една от неговите цифри без остатък.
// Пример: при N = 16, 2418 е специално число:
// •	16 / 2 = 8 без остатък
// •	16 / 4 = 4 без остатък
// •	16 / 1 = 16 без остатък
// •	16 / 8 = 2 без остатък
// Вход
// Входът се чете от конзолата и се състои от едно цяло число в интервала [1…600000]
// Изход
// На конзолата трябва да се отпечатат всички "специални" числа, разделени с интервал


function specialSum(input) {
    let number = Number(input.shift());
    let printCurrentLine = "";
    for (let i = 1111; i <= 9999; i++) {
        let currentNumberAsString = i.toString();
        let isSpecial = true;
        for (let j = 0; j < currentNumberAsString.length; j++) {
            let currentDigit = Number(currentNumberAsString[j]);
            if (number % currentDigit !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial) {
            printCurrentLine += i + " ";
        }
    }
    console.log(printCurrentLine);
}

specialSum(["16"]);