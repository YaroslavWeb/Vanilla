// Шаблонный метод 11.1

// Подключение библиотек
const fs = require('fs');
const convert = require('xml-js');
let container;

//Абстрактный класс
class Convector{
    convert(){
        this.readFile();
        this.objectConv();
        this.createXML();
    }
};

// Конкретный класс 
class Obj2XML extends Convector{
    /**
     * Метод считывания текстового файла
     * Создание объекта для конверктации
     */
    readFile(){
        let article = {};
        let text = fs.readFileSync("text.txt", "utf8");

        let parts = text.split(/\r?\n/);
        parts = parts.filter(el => el != '');

        article.title  = parts[0];
        article.author = parts[1];
        article.text   = parts[2];
        article.hash   = parts[3];
        console.log(article);
        
        container = article;
    }
    //Конверктация из объекта в XML
    objectConv(){
        let options = {compact: true, ignoreComment: true, spaces: 4};
        let result = convert.js2xml(container, options);
        container = result;
    }

    // Создание XML файла
    createXML(){
        fs.writeFile(`./articles/article.xml`, container, function(err){
            if (err) {
                console.log(err);
            } else {
                console.log("Файл создан");
            }
        });
    }
};

/**
* Клиентский код вызывает шаблонный метод для выполнения алгоритма. Клиентский
* код не должен знать конкретный класс объекта, с которым работает, при
* условии, что он работает с объектами через интерфейс их базового класса.
*/
let callTemplate = (abstractClass)=>{abstractClass.convert();}

callTemplate(new Obj2XML());

