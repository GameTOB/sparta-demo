'use strict';

angular.module("app")

.controller("app.form.ngModelCtrl", ["$scope", "$timeout", "$q", "UIAlert", "FormExample", function($scope, $timeout, $q , UIAlert , FormExample) {

    $scope.user = {
        mobile : ""
    };

    //自定义的初始化
    //$scope.demoForm.$submitting = false;

    $scope.save = function(demoForm,$event){
        console.log($event.target)
        $scope.formSerializeArray = $($event.target).serializeArray();
        $scope.formElement = $($event.target)[0];
        if(demoForm.$valid){
            demoForm.$submitting = true;
            FormExample.save($scope.user).then(function(data){

                return UIAlert("成功");
            },function(error){

                return UIAlert("失败");
            }).finally(function(){

                demoForm.$submitting = false;
                demoForm.$setPristine();
            });


        }else{
            demoForm.$submitting = false;
        }

    };


}]);