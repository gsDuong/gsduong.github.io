'use strict';
angular.module('Authentication', []);
angular.module('myApp', ['Authentication'])
.config(['$routeProvider', function ($routeProvider){
  $routeProvider
    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'app/modules/authentication/views/login.html'
    })
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'index.html'
    })
}])
