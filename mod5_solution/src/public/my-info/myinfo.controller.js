(function(){
  'use strict';

  angular.module('public')
  .controller('MyInfoController',MyInfoController);


  MyInfoController.$inject = ['$scope', 'MenuService','user','ApiPath'];
  function MyInfoController($scope,MenuService,user,ApiPath) {
    var $ctrl = this;
    $ctrl.basePath = ApiPath;

    if(user) {
      $ctrl.user = user;
      MenuService.getMenuItemData(user.favoriteDish.value)
      .then(function(response){
        $ctrl.menuItem = response;
      })
      .catch(function(response){
        console.log(response);
      });

    }


  }
})();
