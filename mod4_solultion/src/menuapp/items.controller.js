(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = [ '$stateParams','MenuDataService', 'menuItems'];
function MenuItemsController( $stateParams, MenuDataService, menuItems) {
  console.log($stateParams);
  var menuItemsCtrl = this;
  menuItemsCtrl.menuItems = menuItems.menu_items;
  menuItemsCtrl.category = menuItems.category;

  console.log( menuItemsCtrl.menuItems);
  console.log(menuItemsCtrl.category);

}

})();
