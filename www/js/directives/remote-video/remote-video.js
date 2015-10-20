angular
  .module('starter.directives')
  .directive('remoteVideo', function($interval) {

  return {
    restrict: 'E',
    scope:{},
    templateUrl: 'js/directives/remote-video/template.html',
    link: link
  };

  function link(scope,element,attrs) {
    scope.float = true;
  }
});
