/**
 * Программа должна прнимать сообщения от любого
 * клиента, работающего на протаколе TCP, и отсылать
 * их на соответствующий серве. При передаче изменять
 * сообщения произвольным образом.
 */

var io = require('socket.io').listen(3000);

io.sockets.on('connection', (socket)=>{
  console.log('Новый клиент подсоединился.');
  
  socket.on('message', (msg)=>{
    console.log(`Получено сообщние: ${msg}`);
    msg += '@gmail.com';
    console.log(`Обработаное сообщние: ${msg}`);
    socket.broadcast.emit('message', msg);
  });
});
