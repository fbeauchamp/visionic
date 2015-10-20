
angular
  .module('starter.directives')
  .directive('login', function (AuthService, $state) {
    return {
      restrict: 'E',
      scope: {
        chats: '='
      },
      templateUrl: 'js/directives/login/template.html',
      link: link
    }

    function link (scope, element, attrs) {
      scope.ready = false
      scope.joining = false
      scope.visible = true

      scope.notReady = function () {
        return !scope.ready && !scope.joining
      }
      scope.submit = function () {
        scope.joining = true
        AuthService.joinRoom(scope.roomName, scope.UserName)
          .then(function () {
            if (AuthService.isInRoom()) {
              console.log(' logged')
            }else {
              console.log('not logged')
            }
            $state.go('tab.dash')
          })
        return false
      }
      scope.submitButtonText = function () {
        if (!scope.roomName) {
          scope.ready = false
          return 'please choose a room name'
        }
        if (!scope.username) {
          scope.ready = false
          return 'please choose a user name'
        }
        if (scope.joining) {
          return 'Joining ... '
        }
        if (scope.roomExists) {
          scope.ready = true
          return 'Join room'
        }
        scope.ready = true
        return 'Create room'
      }
    }
  })
