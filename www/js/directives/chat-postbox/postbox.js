
angular
  .module('starter.directives')
  .directive('chatPostbox', function (SocketService) {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/chat-postbox/template.html',
      link: link
    }
    function link (scope, element, attrs) {
      console.log(attrs)
      scope.check = function (keyEvent) {
        if (keyEvent.which === 13) {
          SocketService.emit('message', {
            to: {
              type: attrs.to,
              id: attrs.toId
            },
            message: scope.message
          })
          scope.message = ''
        }
      }
    }
  })
