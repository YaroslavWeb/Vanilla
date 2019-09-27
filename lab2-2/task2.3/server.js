/**
 * Телнет. Создать программу, которая соединяется
 * с указанным сервером по указаному порту и
 * производит обмен текстовой инофрмацией.
 */

var io = require('socket.io').listen(3000);

let userNum = 0;

io.sockets.on('connection', (socket) => {
    userNum++;
    let username = `User#${userNum}`

    socket.on('setUser', function (fn) {
        fn(username);
    });
    console.log('...');
    console.log('Новый пользователь подсоединился.');
    console.log(username);
    console.log('...');

    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast.emit("message", msg);
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});