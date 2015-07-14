(function(module) {
try {
  module = angular.module('framework');
} catch (e) {
  module = angular.module('framework', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('framework/template/user/authrequired.tpl',
    '<div class="alert alert-danger" ng-if="isAuthrequired">\n' +
    '	您不被授权访问该系统\n' +
    '\n' +
    '	<a href="/#/user/logout">退出</a>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('framework');
} catch (e) {
  module = angular.module('framework', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('framework/template/user/login.tpl',
    '<div  class="alert alert-info" ng-if="isUnlogin">\n' +
    '	请您登录该系统\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('framework');
} catch (e) {
  module = angular.module('framework', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('framework/template/user/logout.tpl',
    '<div  class="alert alert-warning">\n' +
    '	正在退出中\n' +
    '</div>');
}]);
})();
