angular
  .module('starter.directives')
  .directive('remoteVideo', function($interval) {

  return {
    restrict: 'E',
    scope:{},
    templateUrl: 'js/directive/remote-video/template.html',
    link: link
  };

  function link(scope,element,attrs) {
    scope.float = true;
  }
});
