
angular
  .module('starter.directives')
  .directive('chat', function (SocketService) {
    return {
      restrict: 'E',
      scope: {
        chats: '='
      },
      templateUrl: 'js/directives/chat/template.html',
      link: link
    }

    function link (scope, element, attrs) {
      scope.messages = {}// SocketService.searchLog()
      SocketService.on('message', function (message) {
        scope.$apply(function () {
          scope.messages[message.id] = message
        })
      })
    }
  })
