'use strict';

angular.module("app")

.controller("app.form.validateCtrl", function($scope, $timeout, $q , $anchorScroll, UIAlert , FormExample , ValidatePattern) {

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
        FormExample.isRepeatUsername(username).then(function(){
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
            FormExample.save($scope.user).then(function(data){

                return UIAlert("成功");
            },function(error){

                return UIAlert("失败");
            }).finally(function(){

                demoForm.$submitting = false;
                demoForm.$setPristine();
            });


        }else{
            var errorKeys = Object.keys(demoForm.$error);
            if(angular.isArray(errorKeys) && errorKeys.length>0 && demoForm.$error[errorKeys[0]].length>0){
                var inputElem = $("input[name="+demoForm.$error[errorKeys[0]][0].$name+"]");
                $anchorScroll.yOffset = inputElem;
                $anchorScroll();
                inputElem.focus();
            }
            demoForm.$submitting = false;
        }

    };


});