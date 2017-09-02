(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
  toBuy.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
    toBuy.isEmpty = (toBuy.items.length > 0) ? false : true;
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getItemsBought();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsBought = [],
      itemsToBuy = [
    { name: "cookies", quantity: 10 },
    { name: "yogurts", quantity: 4 },
    { name: "apples", quantity: 7 },
    { name: "bananas", quantity: 9 },
    { name: "pineapples", quantity: 16 }
  ];

  service.buyItem = function (itemIndex) {
    var item = itemsToBuy[itemIndex];
    itemsBought.push(item);
    itemsToBuy.splice(itemIndex,1);
  };

  service.getItemsBought = function () {
    return itemsBought;
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };
}

})();
