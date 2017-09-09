(function(){
  'use strict';

  angular.module('NarrowItDownModule', [])
  .controller('NarrowItDownController',NarrowItDownController);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    //initialize variables
    var narrowDown=this;
    narrowDown.searchTerm = '';
    narrowDown.loading = false;

    //Create narrowdown function to retreive items from service based on input
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

      //function to remove a menu item
    narrowDown.removeMenuItem = function (index) {
      narrowDown.found.splice(index,1);
    };
  }
})();
