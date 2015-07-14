'use strict';

angular.module('app')

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/', {
            redirectTo: '/form/ngModel'
        })
        .simpleWhen('/form/ngModel')
        .simpleWhen('/form/validate')
        .otherwise('/');
    }
])