/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.info')
      .controller('ruwangCtrl', ruwangCtrl);

  /** @ngInject */
  function ruwangCtrl($scope) {
    console.log('info');
    $scope.someinfo = 'info';
  }
})();
