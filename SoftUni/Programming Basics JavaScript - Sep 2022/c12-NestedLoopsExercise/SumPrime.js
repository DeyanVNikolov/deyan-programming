// Напишете функция, която получава масив с цели  числа в диапазона от -2,147,483,648 до 2,147,483,647, докато не се получи команда "stop". Да се намери сумата на всички въведени прости и сумата на всички въведени непрости числа. Тъй като по дефиниция от математиката отрицателните числа не могат да бъдат прости, ако на входа се подаде отрицателно число да се изведе следното съобщение "Number is negative.". В този случай въведено число се игнорира и не се прибавя към нито една от двете суми, а програмата продължава своето изпълнение, очаквайки въвеждане на следващо число. 
// На изхода да се отпечатат на два реда двете намерени суми в следния формат:
// "Sum of all prime numbers is: {prime numbers sum}"
// "Sum of all non prime numbers is: {nonprime numbers sum}"


function sumPrime(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;
    let currentNumber = input.shift();
    while (currentNumber !== "stop") {
        currentNumber = Number(currentNumber);
        if (currentNumber < 0) {
            console.log("Number is negative.");
        } else {
            let isPrime = true;
            for (let i = 2; i < currentNumber; i++) {
                if (currentNumber % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primeSum += currentNumber;
            } else {
                nonPrimeSum += currentNumber;
            }
        }
        currentNumber = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrime(["3", "9", "0", "7", "19", "4", "stop"]);
