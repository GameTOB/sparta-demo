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
  $templateCache.put('module/ui/template/datepicker.tpl',
    '<div ng-switch="view">\n' +
    '  <div ng-switch-when="date">\n' +
    '    <table>\n' +
    '      <thead>\n' +
    '      <tr>\n' +
    '        <th ng-click="prev()">&lsaquo;</th>\n' +
    '        <th colspan="5" class="switch" ng-click="setLastView()" ng-bind="date|date:\'yyyy MMMM\'"></th>\n' +
    '        <th ng-click="next()">&rsaquo;</i></th>\n' +
    '      </tr>\n' +
    '      <tr>\n' +
    '        <th ng-repeat="day in weekdays" style="overflow: hidden" ng-bind="day|date:\'EEE\'"></th>\n' +
    '      </tr>\n' +
    '      </thead>\n' +
    '      <tbody>\n' +
    '      <tr ng-repeat="week in weeks">\n' +
    '        <td ng-repeat="day in week">\n' +
    '          <span\n' +
    '            ng-class="{\'now\':isNow(day),\'active\':isSameDay(day),\'other-month\':(day.getMonth()!=date.getMonth()),\'after\':isAfter(day),\'before\':isBefore(day),\'disabled\':isDisabled(day)}"\n' +
    '            ng-click="setDate(day)" ng-bind="day.getDate()"></span>\n' +
    '        </td>\n' +
    '      </tr>\n' +
    '      </tbody>\n' +
    '    </table>\n' +
    '  </div>\n' +
    '  <div ng-switch-when="year">\n' +
    '    <table>\n' +
    '      <thead>\n' +
    '      <tr>\n' +
    '        <th ng-click="prev(10)">&lsaquo;</th>\n' +
    '        <th colspan="5" class="switch" ng-bind="years[0].getFullYear()+\' - \'+years[years.length-1].getFullYear()"></th>\n' +
    '        <th ng-click="next(10)">&rsaquo;</i></th>\n' +
    '      </tr>\n' +
    '      </thead>\n' +
    '      <tbody>\n' +
    '      <tr>\n' +
    '        <td colspan="7">\n' +
    '          <span ng-class="{\'active\':isSameYear(year),\'now\':isNow(year)}"\n' +
    '                ng-repeat="year in years"\n' +
    '                ng-click="setDate(year)" ng-bind="year.getFullYear()"></span>\n' +
    '        </td>\n' +
    '      </tr>\n' +
    '      </tbody>\n' +
    '    </table>\n' +
    '  </div>\n' +
    '  <div ng-switch-when="month">\n' +
    '    <table>\n' +
    '      <thead>\n' +
    '      <tr>\n' +
    '        <th ng-click="prev()">&lsaquo;</th>\n' +
    '        <th colspan="5" class="switch" ng-click="setLastView()" ng-bind="date|date:\'yyyy\'"></th>\n' +
    '        <th ng-click="next()">&rsaquo;</i></th>\n' +
    '      </tr>\n' +
    '      </thead>\n' +
    '      <tbody>\n' +
    '      <tr>\n' +
    '        <td colspan="7">\n' +
    '          <span ng-repeat="month in months"\n' +
    '                ng-class="{\'active\':isSameMonth(month),\'after\':isAfter(month),\'before\':isBefore(month),\'now\':isNow(month)}"\n' +
    '                ng-click="setDate(month)"\n' +
    '                ng-bind="month|date:\'MMM\'"></span>\n' +
    '        </td>\n' +
    '      </tr>\n' +
    '      </tbody>\n' +
    '    </table>\n' +
    '  </div>\n' +
    '  <div ng-switch-when="hours">\n' +
    '    <table>\n' +
    '      <thead>\n' +
    '      <tr>\n' +
    '        <th ng-click="prev(24)">&lsaquo;</th>\n' +
    '        <th colspan="5" class="switch" ng-click="setLastView()" ng-bind="date|date:\'dd MMMM yyyy\'"></th>\n' +
    '        <th ng-click="next(24)">&rsaquo;</i></th>\n' +
    '      </tr>\n' +
    '      </thead>\n' +
    '      <tbody>\n' +
    '      <tr>\n' +
    '        <td colspan="7">\n' +
    '          <span ng-repeat="hour in hours"\n' +
    '                ng-class="{\'now\':isNow(hour),\'active\':isSameHour(hour)}"\n' +
    '                ng-click="setDate(hour)" ng-bind="hour|UITime"></span>\n' +
    '        </td>\n' +
    '      </tr>\n' +
    '      </tbody>\n' +
    '    </table>\n' +
    '  </div>\n' +
    '  <div ng-switch-when="minutes">\n' +
    '    <table>\n' +
    '      <thead>\n' +
    '      <tr>\n' +
    '        <th ng-click="prev()">&lsaquo;</th>\n' +
    '        <th colspan="5" class="switch" ng-click="setLastView()" ng-bind="date|date:\'dd MMMM yyyy\'"></th>\n' +
    '        <th ng-click="next()">&rsaquo;</i></th>\n' +
    '      </tr>\n' +
    '      </thead>\n' +
    '      <tbody>\n' +
    '      <tr>\n' +
    '        <td colspan="7">\n' +
    '          <span ng-repeat="minute in minutes"\n' +
    '                ng-class="{active:isSameMinutes(minute),\'now\':isNow(minute)}"\n' +
    '                ng-click="setDate(minute)"\n' +
    '                ng-bind="minute|UITime"></span>\n' +
    '        </td>\n' +
    '      </tr>\n' +
    '      </tbody>\n' +
    '    </table>\n' +
    '  </div>\n' +
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
  $templateCache.put('module/ui/template/daterange.tpl',
    '<div>\n' +
    '    <table>\n' +
    '        <tr>\n' +
    '            <td valign="top">\n' +
    '                <div ui-date-picker ng-model="start" ng-disabled="disableDatePickers"  class="date-picker" date after="start" before="end" min-view="date" max-view="date"></div>\n' +
    '            </td>\n' +
    '            <td valign="top">\n' +
    '                <div ui-date-picker ng-model="end" ng-disabled="disableDatePickers"  class="date-picker" date after="start" before="end"  min-view="date" max-view="date"></div>\n' +
    '            </td>\n' +
    '        </tr>\n' +
    '    </table>\n' +
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
