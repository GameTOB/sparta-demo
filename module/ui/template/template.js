(function(module) {
try {
  module = angular.module('module');
} catch (e) {
  module = angular.module('module', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('module/ui/template/alert.tpl',
    '<div class="ui-alert state-{{data.stateClass}}">\n' +
    '<div class="modal-body" ng-if="data.message">\n' +
    '  <p>{{data.message}}</p>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '  <button type="button" class="btn btn-{{data.stateClass}}" ng-click="ok()">{{data.resolveText}}</button>\n' +
    '</div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('module');
} catch (e) {
  module = angular.module('module', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('module/ui/template/confirm.tpl',
    '<div class="ui-confirm state-{{data.stateClass}}">\n' +
    '<div class="modal-body" ng-if="data.message">\n' +
    '  <p>{{data.message}}</p>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '  <button type="button" class="btn btn-{{data.stateClass}}" ng-click="ok()">{{data.resolveText}}</button>\n' +
    '  <button type="button" class="btn btn-default" ng-click="cancel()">{{data.rejectText}}</button>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('module');
} catch (e) {
  module = angular.module('module', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('module/ui/template/menu.tpl',
    '<ul class="nav">\n' +
    '	<li ng-repeat="node in uiMenuNodes" \n' +
    '		ng-class="{active: node.isUnfold()}">\n' +
    '		<a href="{{node.url}}" ng-click="!node.url && node.toggleUnfold()">\n' +
    '			<span class="nav-label">{{node.title}}</span>\n' +
    '			<span class="fa arrow" ng-if="node.isParent()"></span>\n' +
    '		</a>\n' +
    '		<div ui-menu ng-if="node.isParent()" children-data="node.getChildren()" ng-class="{in: node.isUnfold()}" class="collapse"></div>\n' +
    '	</li>\n' +
    '</ul>');
}]);
})();
