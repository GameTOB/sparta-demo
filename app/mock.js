'use strict';


angular.module('framework').requires.push("ngMockE2E");

angular.module('framework')

.run(["ApiMock", function(ApiMock) {

    ApiMock.start();

}]);