"use strict";
/*
2.2.
Прочитать текст Java-программы
и все слова public в объявлении
атрибутов и методов класса заменить
на слово private
*/

const fs = require("fs");

function replaceInFile(file, regexp, replacement) {
    fs.readFile(file, 'utf8', (err,data) => {
        if(err) throw(err);
        
        let result = data.replace(regexp, replacement);
    
        fs.writeFile(file, result, 'utf8',  (err) => {
           if (err) throw(err);
        });
      });
}

try {
    replaceInFile('code.java', /public/g, 'private');
} catch (error) {
    console.log('Возникла ошибка', error.message);
}
  console.log('Обработка завершена');
  