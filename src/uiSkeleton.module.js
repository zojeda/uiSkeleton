var MenuContribution = (function() {
  function MenuContribution(attr_template, attr_position) {
    this.template = attr_template;
    this.position = attr_position;
  }

  MenuContribution.ID = 'core.menu';


  return MenuContribution;

})();

(function(module) {

  module.config(function(appModelProvider) {
    appModelProvider.addContributionPoint(MenuContribution.ID, MenuContribution);
  });


}(angular.module("uiSkeleton", [
  'applicationModel'
])));
