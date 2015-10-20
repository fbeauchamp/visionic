var angular = window.angular
angular
  .module('starter.directives')
  .directive('floatable', function ($ionicGesture) {
    return {
      restrict: 'A',
      link: link
    }

    function link (scope, element, attrs) {
      var index = parseInt(attrs.floatIndex, 10) || 1
      var handleTap = function (e) {
        scope.$apply(function () {
          attrs.float = !attrs.float
        })
      }
      var tapGesture = $ionicGesture.on('tap', handleTap, element)
      scope.$on('$destroy', function () {
        // Clean up - unbind drag gesture handler
        $ionicGesture.off(tapGesture, 'tap', handleTap)
      })

      scope.$watch(function () { return attrs.float }, function (float) {
        if (float) {
          floatVideo(element)
        }else {
          dockVideo(element)
        }
        function floatVideo () {
          // video should float above others content
          element.addClass('floatable-and-floated')
          element.css({
            position: 'absolute',
            overflow: 'hidden',
            height: '70px',
            width: '70px',
            right: 0,
            top: (80 * (index - 1)) + 'px',
            'border-radius': '50%',
            border: '2px solid rgba(255,255,255,0.75)'
          })
        }

        function dockVideo () {
          element.removeClass('floatable-and-floated')
          // video should take all available space in container
          element.css({
            position: '',
            height: 'auto',
            width: 'auto',
            'border-radius': '0',
            border: 'none'
          })
        }
      })
    }
  })
