'use strict';

angular.module("app")

.service('FormExample', function ( $timeout , $q ) {
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
});