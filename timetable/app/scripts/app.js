'use strict';
angular.module('myApp', ['Authentication'])
.config(['$routeProvider', function ($routeProvider){
  $routeProvider
    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'modules/authentication/views/login.html'
    })
}])
