angular.module('starter.services')
.factory('Chats', function(SocketService) {
  // Might use a resource here that returns a JSON array
  var chats = SocketService.searchLog()
  SocketService.on('message', function (message) {
    console.log('in chat ',message)
  })

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
