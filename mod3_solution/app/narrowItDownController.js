(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowDown = this;

    narrowDown.searchTerm = "";
    narrowDown.found = [];

    narrowDown.narrowItems = function() {
      console.log('controller func.js called');
      if(narrowDown.searchTerm !== undefined && narrowDown.searchTerm !== ''){
        var promise = MenuSearchService.getMatchedMenuItems(narrowDown.searchTerm);
        promise.then(function (response) {
          narrowDown.found = response;
        })
        .catch(function (error) {
        console.log("Something went wrong", error);
        });
      }
    };

    narrowDown.removeMenuItem = function(index) {
        narrowDown.found.splice(index,1);
    };
  }
})();
