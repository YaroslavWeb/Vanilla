const fs = require('fs');
const DOMParser = require('xmldom').DOMParser;


let text = fs.readFileSync("tarifs.xml", "utf8");

let parser = new DOMParser();
let xmlDom = parser.parseFromString(text,"text/xml");

const list = xmlDom.getElementsByTagName('tariff');
let resualt = [];

for (let index = 0; index < list.length; index++) {
    let item = list.item(index);
    let tariff = {};
    tariff.name = item.getElementsByTagName('name').item(0).textContent;
    tariff.operator = item.getElementsByTagName('operator').item(0).textContent;
    tariff.inside = item.getElementsByTagName('inside').item(0).textContent;
    resualt.push(tariff);
}

console.log(resualt);


// let showCollection = (obj)=>{
//     let lengthObj = xmlDom.getElementsByTagName(`${obj}`).length;

//     for (let index = 0; index < lengthObj; index++) {
//         var val = xmlDom.getElementsByTagName(`${obj}`)[index].childNodes[0].nodeValue;
//         console.log(val);
//     };    
// }

// showCollection('tariffs');

// console.log(`__________________`);
// console.log(`Названия тарифов:`);
// showCollection('name');
// console.log(`__________________`);
// console.log(`Операторы:`);
// showCollection('operator');

