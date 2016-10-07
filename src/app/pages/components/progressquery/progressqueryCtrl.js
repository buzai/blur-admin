/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.progressquery')
      .controller('ProgressQueryCtrl', ProgressQueryCtrl);

  /** @ngInject */
  function ProgressQueryCtrl($scope) {
  	
    /*入网 */
    $scope.rwnum1 = true;
    $scope.rwnum2 = true;
    $scope.rwnum3 = false;
    $scope.rwnum4 = false;
    $scope.rwnum5 = false;
    $scope.rwnum6 = false;
    /*建店 */
    $scope.jdnum1 = true;
    $scope.jdnum2 = true;
    $scope.jdnum3 = true;
    $scope.jdnum4 = false;
    $scope.jdnum5 = false;
    $scope.jdnum6 = false;
    $scope.jdnum7 = false;
  }
})();
