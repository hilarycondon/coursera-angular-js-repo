(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];


  function LunchCheckController($scope) {
    $scope.CheckLunch = function () {
        // if submitted, set error message to null until evaluated
        $scope.errorMessage = "";
        //create an array of lunch items from input
        var lunchArray = createLunchArray($scope.lunchItems);
        //determine the correct message to display
        setMessage(lunchArray);
    };

    /*
      If string was entered:
        - Create array of valid (not empty, comma, or space) values
      If nothing entered:
        - Eliminate any existing message
        - Set error message
        - Make border of box red

    */
      function createLunchArray(string) {
        if (string) {
          var stringArray = string.split(',');
          for (var i = 0; i < stringArray.length; i++) {
            stringArray[i] = stringArray[i].trim();
          }
          stringArray = stringArray.filter(Boolean);
          return stringArray;
        }
        $scope.message = "";
        $scope.errorMessage = "Please enter data first.";
        $scope.messageStyle = 'border: 1px solid #E74C3C';
      }

      /*
        Determine correct message to display :
          - If only empty, space, or comma values entered, display error with red border
          - If valid entry, make box green and eliminate error message
          - If less than 3 valid items entered, display "Enjoy!"
          - If more than 3 valid items entered, display "Too much! "
      */
      function setMessage(itemsArray) {
        if (!itemsArray.length) {
          $scope.message = "";
          $scope.errorMessage = "Please enter data first. Commas and spaces do not count as values.";
          $scope.messageStyle = 'border: 1px solid #E74C3C';
          return;
        }
        $scope.errorMessage = "";
        $scope.messageStyle = 'border: 1px solid #30B41D';
        if (itemsArray.length < 4) {
          $scope.message = "Enjoy!";
          return;
        }
        $scope.message = "Too much!";
      }
  }
})();
