const fs = require('fs');
const DOMParser = require('xmldom').DOMParser;


let text = fs.readFileSync("tarifs.xml", "utf8");

let parser = new DOMParser();
let xmlDom = parser.parseFromString(text,"text/xml");


let showCollection = (obj)=>{
    let lengthObj = xmlDom.getElementsByTagName(`${obj}`).length;
    for (let index = 0; index < lengthObj; index++) {
        var val = xmlDom.getElementsByTagName(`${obj}`)[index].childNodes[0].nodeValue;
        console.log(val);
    };    
}

console.log(`__________________`);
console.log(`Названия тарифов:`);
showCollection('name');
console.log(`__________________`);
console.log(`Операторы:`);
showCollection('operator');

