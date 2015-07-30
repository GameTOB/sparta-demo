'use strict';

angular.module("app")

.controller("app.form.datepickerCtrl", function($rootScope , $scope, $timeout) {
	
	var now = +new Date();
	$scope.customDate  = new Date(now-2*86400000);
	$scope.minDate  = new Date(now-10*86400000);
	$scope.maxDate  = new Date(now+10*86400000);
	console.log("customDate", $scope.customDate);
})
