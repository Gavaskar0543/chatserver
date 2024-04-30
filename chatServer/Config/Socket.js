module.exports.chatSockets = function(socketServer){
    let io = require('socket.io')(socketServer)
    
    io.sockets.on('connection',function(socket){
        console.log('connection recived',socket.id);
        socket.on('disconnect',function(){
            console.log('socket disconnected');
        });
        
        socket.on('chat_message',function(data){
            console.log('new  message',data);
            io.emit('chat_message', data);
          
        }) 
        socket.on('send_message',function(data){
              io.in(data.chatroom).emit('recived_message',data);
        })
    })
    
    }