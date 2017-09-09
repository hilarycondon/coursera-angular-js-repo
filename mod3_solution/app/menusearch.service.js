(function(){
  'use strict';

  angular.module('MenuSearchModule',[])
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");

  MenuSearchService.$inject = ['$http','ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function(string) {
        return $http({
          method: "GET",
          url: ApiBasePath
        }).then(function (result) {
          var foundItems = [];
          var menuItems = result.data.menu_items;

          if (string == undefined || string == ''){
            return [];
          }
          for(var i = 0; i < menuItems.length; i++) {
            var description = menuItems[i].description.toLowerCase();
            if(description.indexOf(string.toLowerCase()) !== -1) {
              var item = {
                name: menuItems[i].name,
                shortName: menuItems[i].short_name,
                description: menuItems[i].description
              };
              foundItems.push(item);
              }
          }
          return foundItems;
        });
    };
  }
})();
