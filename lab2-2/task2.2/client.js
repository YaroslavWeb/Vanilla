const io = require('socket.io-client');
const readline = require('readline');
const socket = io.connect('http://localhost:3000', {reconnect:true});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

socket.on("connect", ()=>{
    console.log("Успешное подключение к серверу.");
    send();
});

const send = ()=>{
    rl.question("Ваше сообщение:", (msg)=>{
        socket.emit("message", msg);
    })
}