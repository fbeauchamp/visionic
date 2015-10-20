var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var messages = require('./stores/messages')

io.on('connection', function (socket) {
  console.log('a user connected')

  socket.on('message', function (payload) {
    console.log(' got message from ', socket.id, payload)
    payload.from = {
      id: socket.id
    }
    messages.store(payload.to, payload.message)
      console.log(' stored ',messages.all())
    // Each Socket in Socket.IO is identified by a random, unguessable, unique identifier Socket#id.
    // For your convenience, each socket automatically joins a room identified by this id.

    socket.broadcast.to(payload.to.id).emit('message', payload)
  })

  socket.on('join', function (roomName) {
    console.log(' user joined ',roomName)
    socket.join(roomName)
    // todo : send stored messages
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
