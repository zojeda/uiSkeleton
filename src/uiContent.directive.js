(function(module) {
  'use strict';
  module.directive('uiContent', function() {
    return {
      restrict: 'E',
      templateUrl: 'uiSkeleton.tpl.html'
    };
  });
}(angular.module("uiSkeleton")));
