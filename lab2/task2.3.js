"use strict";
/*
2.3
Входной файл содержит совокупность строк.
Строка файла содержит строку квадратной матрицы.
Ввести матрицу в двумерный массив (размер матрицы найти).
Вывести исходную матрицу и результат её транспонирования.
*/

const fs = require("fs");

let transMatr = (fileName) => {
    const matrix = [];
    const matr = fs.readFileSync(fileName, "utf8", (err) => {
        if (err) throw (err);
    });
    let rows = matr.split(/\r?\n/);

    for (const row in rows) {
        matrix[row] = rows[row].split(/ +/);
    }
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < i; j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    console.log('Исходная матрица');
    console.log(matr);
    console.log('____________');
    console.log('Массив');
    console.log(matrix);
};


try {
    transMatr('matr.txt')
} catch (error) {
    console.log('Ошибка:', error.message);
}