(function () {
  'use strict';
  angular.module('myApp', [])
  .controller('CheckController', CheckController);

  CheckController.$inject = ['$scope'];
  function checkEmptyDish(dish){
    return dish != "";
  }
  function CheckController ($scope){
    $scope.dishes = "Chicken, Beef, Pork, Vegetables";

    $scope.message = "";
    $scope.messageColor = "";
    $scope.check = function (){
      var items = $scope.dishes.split(",");
      items = items.filter(checkEmptyDish);
      $scope.messageColor = "green";
      console.log(items);
      if(items.length == 0) {
          $scope.message = "Please enter data first";
          $scope.messageColor = "red";
      }
      else if(items.length <= 3) {
          $scope.message = "Enjoy!";
      }
      else $scope.message = "Too much!"
    }
  }
})();
