(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // HOME
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })


  // CATEGORIES PAGE
  .state('categories', {
    url: '/categories/',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'CategoryController as categoryList',
    resolve: {
        menuCategories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
      }]
    }
  })

// CATEGORIES ITEMS
  .state('items', {
    url: '/menu/{category}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'MenuItemsController as menuItemsCtrl',
    params: {
      category: null
    },
   resolve: {
      menuItems: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.category);
      }]
   }
 });
}
})();
