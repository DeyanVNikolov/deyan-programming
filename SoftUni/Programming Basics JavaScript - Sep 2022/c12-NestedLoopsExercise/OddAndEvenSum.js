// Напишете функция, която получава две шестцифрени цели числа в диапазона от 100000 до 300000. Винаги първото въведено число ще бъде по малко от второто. На конзолата да се отпечатат на 1 ред разделени с интервал всички числа, които се намират между двете, прочетени от конзолата числа и отговарят на следното условие:
// •	сумата от цифрите на четни и нечетни позиции да са равни. Ако няма числа, отговарящи на условието на конзолата не се извежда резултат. 


function oddAndEvenSum(input) {
    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());
    let printCurrentLine = "";
    for (let currentNumber = firstNumber; currentNumber <= secondNumber; currentNumber++) {
        let currentNumberAsString = currentNumber.toString();
        let oddSum = 0;
        let evenSum = 0;
        for (let i = 0; i < currentNumberAsString.length; i++) {
            let currentDigit = Number(currentNumberAsString[i]);
            if (i % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum === evenSum) {
            printCurrentLine += currentNumber + " ";
        }
    }
    console.log(printCurrentLine);
}

oddAndEvenSum(["100000", "100050"]);