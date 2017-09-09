(function(){
  'use strict';

  angular.module('FoundItemsModule',[])
  .directive('foundItems', FoundItemsDirective);


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


})();
