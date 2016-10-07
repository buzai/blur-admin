'use strict';

angular.module('BlurAdmin')
// Sample factory (dummy)
  .factory('factory', [function () {
    var somValue = 42;
    return {
      someMethod: function () {
        return somValue;
      }
    };
  }])
  //用户管理卖家  http://127.0.0.1:8080/api/users
  .factory('Shop',['$resource',function($resource){

    var obj={};
    obj=$resource('http://127.0.0.1:8080/api/shops');
    return obj;

  }])
  .factory('Product', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/products/:id', null, {'update': { method:'PUT' } });
    obj.count = $resource('/api/products/count', null, {'update': { method:'PUT' }});
    obj.userProduct = $resource('/api/products/user');
    return obj;
  }])
;
