// Производителите на вендинг машини искали да направят машините си да връщат възможно най-малко монети ресто. Напишете функция, която приема сума - рестото, което трябва да се върне и изчислява с колко най-малко монети може да стане това. Монетите може да са от 2 лева, 1 лев, 50 стотинки, 20 стотинки, 10 стотинки, 5 стотинки, 2 стотинки или 1 стотинка 
// Примерен вход и изход
// Вход	Изход	Обяснения
// (["1.23"])	4	Рестото ни е 1 лев и 23 стотинки. Машината ни го връща с 4 монети: монета от 1 лев, монета от 20 стотинки, монета от 2 стотинки и монета от 1 стотинка.
// (["2"])	1	Рестото ни е 2 лева. Машината ни го връща с 1 монета от 2 лева.
// (["0.56"])	3	Рестото ни е 56 стотинки. Машината ни го връща с 3 монети: монета от 50 стотинки, монета от 5 стотинки и монета от 1 стотинка.
// (["2.73"])	5	Рестото ни е 2 лева и 73 стотинки. Машината ни го връща с 5 монети: монета от 2 лева, монета от 50 стотинки, монета от 20 стотинки, монета от 2 стотинки и монета от 1 стотинка.


function coins(input) {
    let change = Number(input.shift());
    let coins = 0;
    let coin = 0;
    while (change > 0) {
        if (change >= 2) {
            coin = Math.floor(change / 2);
            change -= coin * 2;
            coins += coin;
        } else if (change >= 1) {
            coin = Math.floor(change / 1);
            change -= coin * 1;
            coins += coin;
        } else if (change >= 0.50) {
            coin = Math.floor(change / 0.50);
            change -= coin * 0.50;
            coins += coin;
        } else if (change >= 0.20) {
            coin = Math.floor(change / 0.20);
            change -= coin * 0.20;
            coins += coin;
        } else if (change >= 0.10) {
            coin = Math.floor(change / 0.10);
            change -= coin * 0.10;
            coins += coin;
        } else if (change >= 0.05) {
            coin = Math.floor(change / 0.05);
            change -= coin * 0.05;
            coins += coin
        } else if (change >= 0.02) {
            coin = Math.floor(change / 0.02);
            change -= coin * 0.02;
            coins += coin;
        }
        else if (change >= 0.01) {
            coin = Math.floor(change / 0.01);
            change -= coin * 0.01;
            coins += coin;
        }

    }
    console.log(coins);
}

coins(["1.23"]);