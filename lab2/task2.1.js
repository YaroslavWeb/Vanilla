"use strict";
/*
2.1.
Найти и вывести слова текста,
для которых последняя буква
одного слова совпадает с первой
буквой следующего слова
*/
const fs = require("fs");

let text = fs.readFileSync("some.txt", "utf8"),
    arrText = [],
    arrRes = [],
    cur = 0,
    next;

arrText = text.split(' ');

console.log(text);
console.log('_______________');
try {
    for (let item in arrText) {
        cur = +item;
        next = +item + 1;
        if (arrText[cur].substr(-1) == arrText[next].substr(0, 1))
            arrRes.push(arrText[cur], arrText[next]);
    }
} catch (error) {
    console.log('Ошибка:', error.message);
} finally {
    console.log('_______________');
    console.log('Вот пары слов:');

    for (let i = 0; i < arrRes.length; i++) {
        console.log(arrRes[i], arrRes[++i]);
    }
}