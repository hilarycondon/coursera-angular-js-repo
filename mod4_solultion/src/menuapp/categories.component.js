(function () {
'use strict';
/*create component called categories that shows
 all available categories in the menu to the user.
 the proper data should be simply passed into the component.
 using binding - < */
angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuApp/templates/categories.template.html',
  bindings: {
    menuCategories: '<'
  }

});

})();
