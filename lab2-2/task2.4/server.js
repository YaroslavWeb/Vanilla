/**
 * Клиент при обращении к серверу получает
 * случайно выбранный сонет Шекспира из файла
 */

const io = require('socket.io').listen(3000);

const sonnets = require ('./sonnets');


io.sockets.on('connection', (socket) => {
    console.log('Пользователь подключился!');
    socket.on('getSonnet', function (fn) {
        fn(sonnets[Math.random() * (2 - 0) + 0]);
    });
});