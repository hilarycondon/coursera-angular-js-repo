(function() {
  'use strict';
  angular.module('common')
  .service('UserService', UserService);

  UserService.$inject = [];
  function UserService () {
    var service = this;

    service.addUser = function(userInfo){
        service.user = userInfo;
    };

    service.getUser = function() {
      return service.user;
    };
  }
})();
