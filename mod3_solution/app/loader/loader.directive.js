(function() {
  'use strict';

  angular.module('NarrowItDownApp')
  .directive('loader', LoaderDirective);

  function LoaderDirective() {
    var ddo = {
      templateUrl: 'app/loader/itemsloaderindicator.template.html'
    };
    return ddo;
  }
})();
