'use strict';

angular.module('Authentication')

.controller('LoginController',
    ['$scope', '$location',
    function ($scope, $location) {
      $scope.error = "";
      $scope.login = function (){
        if ($scope.username == "test" && $scope.password == "test") {
          $scope.error = "";
          $location.path('/')
        }
        else $scope.error = "Username or password is incorrect!";
      }
    }]);
