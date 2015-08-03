'use strict';

angular.module("app")

.controller("app.form.datepickerCtrl", function($rootScope , $scope, $timeout) {
	
	var now = +new Date();
	$scope.customDate  = new Date(now-2*86400000);
	$scope.minDate  = new Date(now-10*86400000);
	$scope.maxDate  = new Date(now+10*86400000);

	$scope.disableDate = function(date , view){
		if(view=="hours"||view=="minutes"){
			var hour = date.getHours();
			return hour<10 || hour>20;
		}
		return false;
	}

	$scope.startDate = null;
	$scope.endDate   = null;
})
