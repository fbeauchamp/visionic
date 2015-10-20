

angular
  .module('starter.directives')
  .directive('localVideo', function() {

  console.log(' in directive definition')
  return {
    restrict: 'E',
    scope:{},
    templateUrl: 'js/directives/local-video/template.html',
    link: link
  };

  function link(scope,element,attrs) {
    scope.float=false
    console.log(scope)
  }
});
