(function(module) {
  'use strict';
  module.controller('UISkeletonController', ['appModel', '$scope', function(appModel, $scope) {
    var menuContributions = appModel.contributions[MenuContribution.ID];
    menuContributions.sort(function(a, b) {
      return a.position - b.position;
    });
    $scope.menuContributions = menuContributions;

  }]);

}(angular.module("uiSkeleton")));
