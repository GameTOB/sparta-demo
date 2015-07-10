(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/template/index.tpl',
    '<div id="wrapper" ng-controller="app.indexCtrl">\n' +
    '	<nav class="navbar-default navbar-static-side">\n' +
    '		<div class="sidebar-collapse">\n' +
    '			<h2>菜单</h2>\n' +
    '			<div id="side-menu" ui-menu root-data="menuData"></div>\n' +
    '<!-- 			<ul class="nav" id="side-menu">\n' +
    '				<li ng-repeat="node1st in menu.data" \n' +
    '					ng-class="{active: menu.NodeSvc.isUnfold(node1st)}"\n' +
    '					todo="这里需要封成 menu"\n' +
    '					>\n' +
    '					<a href="{{node1st.url}}" ng-click="!node1st.url && menu.NodeSvc.toggleFold(node1st)">\n' +
    '						<span class="nav-label">{{node1st.title}}</span>\n' +
    '						<span class="fa arrow" ng-if="menu.NodeSvc.isParent(node1st)"></span>\n' +
    '					</a>\n' +
    '					<ul class="nav nav-second-level collapse"\n' +
    '						ng-class="{in: menu.NodeSvc.isUnfold(node1st)}" \n' +
    '						ng-if="menu.NodeSvc.isParent(node1st)">\n' +
    '						<li ng-repeat="node2nd in menu.NodeSvc.getChildren(node1st)" \n' +
    '							ng-class="{active: menu.NodeSvc.isUnfold(node2nd)}">\n' +
    '							<a href="{{node2nd.url}}" ng-click="!node2nd.url && menu.NodeSvc.toggleFold(node2nd)">\n' +
    '							{{node2nd.title}}\n' +
    '							<span class="fa arrow" ng-if="menu.NodeSvc.isParent(node2nd)"></span>\n' +
    '							</a>\n' +
    '							<ul class="nav nav-third-level collapse"\n' +
    '							ng-class="{in: menu.NodeSvc.isUnfold(node2nd)}" \n' +
    '							ng-if="menu.NodeSvc.isParent(node2nd)">\n' +
    '								<li ng-repeat="node3rd in menu.NodeSvc.getChildren(node2nd)"\n' +
    '									ng-class="{active: menu.NodeSvc.isUnfold(node3rd)}"\n' +
    '								><a href="{{node3rd.url}}">{{node3rd.title}}</a></li>\n' +
    '							</ul>\n' +
    '						</li>\n' +
    '					</ul>\n' +
    '				</li>\n' +
    '			</ul> -->\n' +
    '		</div>\n' +
    '	</nav>\n' +
    '	<div id="page-wrapper" class="gray-bg">\n' +
    '		<div class="row">\n' +
    '			<div class="col-lg-12">\n' +
    '				<div ng-view></div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>	\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/template/readme.tpl',
    '<h1 id="-">说明</h1>\n' +
    '<h2 id="-">计划</h2>\n' +
    '<ol>\n' +
    '<li>06/19/2015 Menu</li>\n' +
    '</ol>\n' +
    '');
}]);
})();
