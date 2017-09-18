(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);


CategoryController.$inject = ['MenuDataService', 'menuCategories'];
function CategoryController(MenuDataService, menuCategories) {
  var categoryList = this;
  categoryList.menuCategories = menuCategories;
  console.log(categoryList.menuCategories);
}

})();
