
angular
  .module('starter.directives')
  .directive('floatable', function($interval) {

  return {
    restrict: 'E',
    link: link,
    transclude:'element',
    templateUrl:'js/directive/floatable/template.html'
  };

  function link(scope,element,attrs) {
    console.log(element)

    scope.$watch(attrs.float , function(float){
      if(!!float){
        floatVideo(element)
      }else{
        dockVideo(element)
      }
    })
  }

  function floatVideo(element){
    if(!element){
      return ;
    }
    element.css({
      height: '70px',
      width: '70px',
      'border-radius': '50%',
      border: '2px solid rgba(255,255,255,0.75)'
    })
  }

  function dockVideo(element){
    if(!element){
      return ;
    }
    element.css({
      height: 'auto',
      width: 'auto',
      'border-radius': '0',
      border: 'none'
    })
  }
});
