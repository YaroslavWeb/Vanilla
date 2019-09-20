"use strict";
/*
2.5
Найти в строке наибольшее число цифр, идущих подряд 
(строка может содержать как одно, так и несколько слов).
*/

const fl = require('fs');

let findBigestNum = () => {
    let numbers;
    let longestWord = 0;
    let item;

    fl.readFile('2.5.txt', 'utf-8', (err, data) => {
        numbers = data.split(' ').filter(function (number) {
            return !isNaN(Number(number));
        });
        for (const key in numbers) {
            if (numbers[key].length > longestWord) {
                longestWord = numbers[key].length;
                item = key;
            }
        }
        console.log('Вот самое длинное число в строке:');
        console.log(numbers[item]);
    });
}

try {
    findBigestNum()
} catch (err) {
    console.log('Ошибка:', err.message);

}