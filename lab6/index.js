'use strict';

const fs = require('fs');
const serialize = require('serialize-javascript');

//take data from json file
let data = fs.readFileSync("data.json", "utf8");
data = JSON.parse(data);


const subjects = data.subjects.subject;
const teachers = data.teachers.teacher;

//pojo subjects
class Subjects{
    constructor(option){
        this.name = option.name
        this.date = option.date
        this.class = option.class
    }
    getName(){
        return this.name
    }
    setName(sub){
        this.name = sub;
        return this;
    }

    getDate(){
        return this.date
    }
    setDate(day){
        this.date = day;
        return this;
    }

    getClass(){
        return this.class
    }
    setClass(cabin){
        this.class = cabin;
        return this.class
    }
};

//pojo teachers
class Teachers{
    constructor(option){
        this.name = option.name
        this.subjects = option.subjects
        this.subjects.subject = option.subjects.subject
        this.amount_subjects = option.amount_subjects
        this.amount_students = option.amount_students
    }
    getName(){
        return this.name
    }
    setName(fio){
        this.name = fio;
        return this;
    }
    getSubjects(){
        return this.subjects.subject
    }
    getSubject(num){
        return this.subjects.subject[num]
    }

    getAmountSub(){
        return this.amount_subjects
    }
    setAmountSub(AmSub){
        this.amount_subjects = AmSub;
        return this;
    }

    getAmountStud(){
        return this.amount_subjects
    }
    setAmountStud(AmStud){
        this.amount_subjects = AmStud;
        return this;
    }
};
//Test pojo
//Output first teacher and all his subjects
let text = `ФИО:${new Teachers(teachers[0]).getName()}\nВедёт: ${new Teachers(teachers[0]).getSubjects()}`;
/**Output:
 * ФИО:Краковский Ю.М.
 * Ведёт: Дисциплина №1,Дисциплина №2 */
console.log(`${text} \n \n`);

console.log('Вывод элемента:');
//Output element object
console.log(new Teachers(teachers[0]));

console.log('Сериализация:');
//serialize element object
let serializeObj = serialize(new Teachers(teachers[0]), {isJSON: true});
console.log(serializeObj + '\n');

console.log('Десериализация:');
//deserializing
console.log (eval(`( ${serializeObj})`));
