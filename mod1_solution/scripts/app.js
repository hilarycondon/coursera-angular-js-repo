(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.CheckLunch = function () {
      $scope.errorMessage = "";
      $scope.message = "";
      if ($scope.lunchItems === ""){
        $scope.errorMessage = "Please enter data first.";
      }
      else {
        var lunchArray =  $scope.lunchItems.split(',');
        if (lunchArray.length < 4) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      }
    };
  };
})();
