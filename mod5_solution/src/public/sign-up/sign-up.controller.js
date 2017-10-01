(function(){
  'use strict';

  angular.module('public')
  .controller('SignUpController',SignUpController);

  SignUpController.$inject = ['$scope', 'MenuService','UserService'];
  function SignUpController($scope,MenuService,UserService) {
    var $ctrl = this;
    $ctrl.user = {
      firstName :{param: 'First Name: ', value: ''},
      lastName : {param: 'Last Name: ', value: ''},
      email : {param: 'Email: ', value: ''},
      phone :{param: 'Phone: ', value: ''},
      favoriteDish : {param: 'Favorite Dish: ', value: ''}
    };
    $ctrl.validDishError = '';
    $ctrl.submitted = false;

    $ctrl.signUpUser = function(){
      $ctrl.submitted = true;
      UserService.addUser($ctrl.user);
    };

    $ctrl.validateDish = function(signUpForm){
      $ctrl.validDishError = '';
        //Check to see if favorite dish is present

        // If no input, set to invalid and assign appropriate error
      if(!$ctrl.user.favoriteDish || $ctrl.user.favoriteDish.value === '') {
          signUpForm.favoritedish.$invalid = true;
          $ctrl.validDishError = 'Please enter the menu number for your favorite dish.';
      }
      //If input present, validate input
      if($ctrl.user.favoriteDish.value) {
        //set to pending until validation complete
          signUpForm.favoritedish.$pending = true;
          MenuService.getMenuItemData($ctrl.user.favoriteDish.value)
          .then(function(response) {
            signUpForm.favoritedish.$pending = false;
            $ctrl.validDishError = '';
            signUpForm.favoritedish.$invalid = false;
            console.log($ctrl.user.favoriteDish.value);
          }).catch(function(){
              signUpForm.favoritedish.$pending = false;
              signUpForm.favoritedish.$invalid = true;
              $ctrl.validDishError = 'No such menu number exists.';
          });

      }
    };


}
})();
