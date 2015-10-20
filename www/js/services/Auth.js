
angular
  .module('starter.services')
  .factory('AuthService', function ($http) {
    var currentRoom = 'null', currentUserName = null
    return {
      isInRoom: function () {
        return !!currentRoom
      },
      getRoom: function () {
        return currentRoom
      },
      getUserName: function () {
        return currentUserName
      },
      leaveRoom: function () {
        return $http
          .post('/leave', {room: currentRoom})
          .then(function () {
            currentRoom = null
            return true
          }, function () {
            currentRoom = null
            return false
          })
      },
      joinRoom: function (roomName, userName) {
        userName = userName || '' // here a random generator
        return $http
          .post('/join', {room: roomName})
          .then(function () {
            currentRoom = roomName
            currentUserName = userName
            return true
          }, function () {
            currentRoom = 'failed'
            return false
          })
      }
    }
  })
