(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .service('MenuSearchService', MenuSearchService);


  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http,  ApiBasePath, string) {
      var service = this,
          searchTerm = string;
      return $http({
        method: "GET",
        url: ApiBasePath
      }).then(function (result) {
        var foundItems = [];
        var menuItems = result.data.menu_items;
        console.log(menuItems);
        console.log(foundItems);
        for(var i = 0; i < menuItems.length; i++) {
          var description = menuItems[i].description.toLowerCase();
          if(description.indexOf(searchTerm.toLowerCase()) !== -1) {
            foundItems.push(menuItems[i]);
            }
        }
        return foundItems;
      });
}

})();
