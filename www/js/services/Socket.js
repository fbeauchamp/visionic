var io = window.io
var angular = window.angular

angular
  .module('starter.services')
  .factory('SocketService', function ($q) {
    var socket = io()
    var listeners = {}

    return {
      join: function (roomName) {
        var deferred = $q.defer()
        socket.emit('join', roomName)
        deferred.notify('Sent to server ')
        // @todo : wait for server to confirm before resolving
        deferred.resolve()
        return deferred.promise
      },
      leave: function (roomName) {
        var deferred = $q.defer()
        socket.emit('leave', roomName)
        deferred.notify('Sent to server ')
        // @todo : wait for server to confirm before resolving
        deferred.resolve()
        return deferred.promise
      },
      messageToUser: function (userId, message) {
        socket.emit('message', {
          to: {
            id: userId,
            type: 'direct'
          },
          message: message
        })
      },
      messageToRoom: function (roomId, message) {
        socket.emit('message', {
          to: {
            id: roomId,
            type: 'room'
          },
          message: message
        })
      },
      emit: function (type, payload) {
        return socket.emit(type, payload)
      },
      on: function (type, fn) {
        if (!listeners[type]) {
          listeners[type] = []
          socket.on(type, function (payload) {
            listeners[type].forEach(function (fn) {
              fn(payload)
            })
          })
        }
        listeners[type].push(fn)
      }
    }
  })
