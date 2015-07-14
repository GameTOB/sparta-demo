'use strict';

angular.module("app")

.controller("app.form.ngModelCtrl", ["$scope", "$timeout", "$q", "UIAlert", "ExampleData", function($scope, $timeout, $q , UIAlert , ExampleData) {

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
            ExampleData.save($scope.user).then(function(data){

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


}])

.controller("app.form.validateCtrl", ["$scope", "$timeout", "$q", "UIAlert", "ExampleData", "ValidatePattern", function($scope, $timeout, $q , UIAlert , ExampleData , ValidatePattern) {

    $scope.user = {
        mobile : "13426077944"
    };
    console.log($scope.user);
    $scope.ValidatePattern = ValidatePattern;
    //自定义的初始化
    //$scope.demoForm.$submitting = false;

    $scope.isUniqueUsername = function(username){
        var deferred = $q.defer();
        //注意此处举例是反义的
        ExampleData.isRepeatUsername(username).then(function(){
            deferred.reject();
        },function(){
            deferred.resolve();
        })
        return deferred.promise;
    };

    $scope.isComplexity = function(password){
        return password ? /[A-Za-z]+/.test(password) : true;
    };

    $scope.save = function(demoForm){

        if(demoForm.$valid){
            demoForm.$submitting = true;
            console.log($scope.user);
            ExampleData.save($scope.user).then(function(data){

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


}])

.service('ExampleData', ["$timeout", "$q", function ( $timeout , $q ) {
    //延迟1秒 模拟服务端提交
    this.save = function(data){
        return $timeout(function(){
            return data;
        },1000);
    };

    this.isRepeatUsername = function(username){
        username = username || "";
        return $q(function(resolve, reject) {
            setTimeout(function() {
                if (username.length > 5) {
                    resolve();
                } else {
                    reject();
                }
            }, 500);
        });
    };
}]);
