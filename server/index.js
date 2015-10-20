var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var messages = require('./stores/messages')
io.set('origins', 'http://localhost:8100');
io.on('connection', function (socket) {
  console.log('a user connected')

  socket.on('message', function (message) {
    console.log(' got message from ', socket.id, message)
    message.from = {
      id: socket.id
    }
    messages.store(message)
    // Each Socket in Socket.IO is identified by a random, unguessable, unique identifier Socket#id.
    // For your convenience, each socket automatically joins a room identified by this id.
    console.log(' send to ', message.to.id)
    io.to(message.to.id).emit('message', message)
  })

  socket.on('join', function (roomName) {
    console.log(' user joined ', roomName)
    socket.join(roomName)
    var existingMessages = messages.all()
    existingMessages.forEach(function (message) {
      socket.emit('message', message)
    })
  })
  socket.on('leave', function (roomName) {
    socket.leave(roomName)
  })
  socket.on('disconnect', function () {
    console.log('user disconnected')
  })
})

http.listen(3000, function () {
  console.log('listening on *:3000')
})
