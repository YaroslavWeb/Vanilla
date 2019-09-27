"use strict";
/*
2.4
Из текстового файла ввести последовательность строк. 
Выделить отдельные слова, разделяемые пробелами. 
Написать метод поиска слова по образцу-шаблону. 
Вывести найденное слово в другой файл.
*/
const fs = require("fs");

function findTemplate(fileName) {
    let filetext = fs.readFileSync(fileName, 'utf8', (err) => {
        if (err) throw (err);
    });
    let text = [];
    text = filetext.split(' ');
    var string = "task";
    fs.writeFileSync('output.txt', text.filter(s => s.indexOf(string) === 0));
    console.log('Слово выведено в другой файл.');
}

try {
    findTemplate('input.txt');
} catch (err) {
    console.log('Ошибка:', err.message);
}