const io = require('socket.io-client');
const readline = require('readline');
const socket = io.connect('http://localhost:3000', {
    reconnect: true
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

socket.on('connect', () => {
    console.log('Успешное подключение к серверу.');
    console.log('__________');
    rl.question('Хотите случайную сонету Шекспира?', (answer) => {
        switch (answer) {
            case 'Да':
            case 'да':
            case 'Yes':
            case 'yes':
                console.log('Держите:');
                socket.emit('getSonnet', (data) => {
                    console.log(data);
                });
                break;

            default:
                console.log('Как хотите.');
                break;
        }
    });
});