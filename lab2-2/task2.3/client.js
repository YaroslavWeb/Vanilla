const io = require('socket.io-client');
const readline = require('readline');
const socket = io.connect('http://localhost:3000', {
    reconnect: true
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let username;

socket.on("connect", () => {
    console.log("Успешное подключение к серверу.");
    console.log("______________________________");
    socket.emit('setUser', (data) => {
        username = data;
    });

    send();
});
socket.on('message', (inMsg) => {
    const msg = JSON.parse(inMsg);
    console.log(`${msg.username}: ${msg.massage}`);
});

const send = () => {
    rl.question("", (outMsg) => {
        socket.emit("message", pack({
            username: username,
            massage: outMsg
        }));
        send();
    });
}

const pack = (obj) => {
    return JSON.stringify(obj)
}