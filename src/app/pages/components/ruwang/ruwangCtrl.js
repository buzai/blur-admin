/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.ruwang')
      .controller('ruwangCtrl', ruwangCtrl);

  /** @ngInject */
  function ruwangCtrl($scope, Shop) {
    console.log('ruwang');
    Shop.get(function(res){
      console.log(res);
    })
    $scope.someinfo = 'ruwang';
  }
})();
