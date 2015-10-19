
angular
  .module('starter.directives')
  .directive('floatable', function($ionicGesture) {

  return {
    restrict: 'A',
    scope:{
      float:'='
    },
    link: link,
    //templateUrl:'js/directive/floatable/template.html'
  };

  function link(scope,element,attrs) {
    var container = angular.element(element.children()[0])
    var handleTap = function (e) {
      console.log(' tapped')
      scope.$apply(function(){
        scope.float = !scope.float
      })
    };
    var tapGesture = $ionicGesture.on('tap', handleTap, element);
    scope.$on('$destroy', function () {
      // Clean up - unbind drag gesture handler
      $ionicGesture.off(tapGesture, 'tap', handleTap);
    });

    scope.$watch(function(){ return scope.float}, function (float) {
      console.log('change', scope.float)
      if(float) {
        floatVideo(element)
      }else {
        dockVideo(element)
      }
    })
  }

  function floatVideo(element){
    element.css({
      float:'right',
      overflow:'hidden',
      height: '70px',
      width: '70px',
      'border-radius': '50%',
      border: '2px solid rgba(255,255,255,0.75)'
    })
  }

  function dockVideo(element){
    element.css({
      float:'left',
      height: 'auto',
      width: 'auto',
      'border-radius': '0',
      border: 'none'
    })
  }
});
