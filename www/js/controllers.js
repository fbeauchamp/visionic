angular.module('starter.controllers', [])

.controller('VideosCtrl', function ($scope) {
  console.log(' in video controler')
})
.controller('DashCtrl', function ($scope, AuthService, $state) {
  $scope.roomName = AuthService.getRoom().name
  $scope.leave = function () {
    // should add a indicator on screen
    AuthService
      .leaveRoom()
      .then(function () {
        $state.go('login')
      })
  }
})

.controller('ChatsCtrl', function ($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  // $scope.$on('$ionicView.enter', function(e) {
  // });

  $scope.chats = Chats.all()
  $scope.remove = function (chat) {
    Chats.remove(chat)
  }
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId)
})

.controller('DocumentsCtrl', function ($scope) {})
