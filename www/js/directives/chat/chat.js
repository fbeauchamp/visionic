
angular
  .module('starter.directives')
  .directive('chat', function() {

  console.log(' in directive definition')
  return {
    restrict: 'E',
    scope: {
      chats: '='
    },
    templateUrl: 'js/directives/chat/template.html',
    link: link
  };

  function link(scope,element,attrs) {
    console.log('link chat')
    console.log(scope);
  }
});
