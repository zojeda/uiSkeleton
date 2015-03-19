(function(module) {
    module.directive('contentItem', function ($compile) {
      var linker = function(scope, element, attrs) {
          element.html(scope.content);

          $compile(element.contents())(scope);
      };

      return {
          restrict: "E",
          link: linker,
          scope: {
              content:'=content'
          }
      };
  });
}(angular.module("applicationModel")));
