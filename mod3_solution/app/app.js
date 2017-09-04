(function(){
  'use strict';
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")
  .directive('loader', LoaderDirective)
  .directive('foundItems', FoundItemsDirective);

  function LoaderDirective() {
    var ddo = {
      templateUrl: 'app/loader/itemsloaderindicator.template.html'
    };
    return ddo;
  }


  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'app/foundItems/founditems.template.html',
      scope: {
        found: '<',
        message: '<',
        onRemove: '&'
      }
    };
    return ddo;
  }



  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var narrowDown=this;
    narrowDown.searchTerm = '';
    narrowDown.narrowItems = function () {
      narrowDown.loading = true;
      narrowDown.message = '';

      var promise = MenuSearchService.getMatchedMenuItems(narrowDown.searchTerm);
        promise.then(function (response) {
          narrowDown.found = response;
          narrowDown.loading = false;
          if (narrowDown.found.length == 0) {
            narrowDown.message = 'Nothing found!';
          }
        })
        .catch(function (error) {
        console.log('Something went wrong', error);
        });
      };

    narrowDown.removeMenuItem = function (index) {
      narrowDown.found.splice(index,1);
    };
  }

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
