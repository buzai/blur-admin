/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.audit')
      .controller('CheckCtrl', CheckCtrl);

  /** @ngInject */
  function CheckCtrl($scope,$state,$stateParams) {
    var id = $stateParams.obj;
    console.log('id');
    console.log(id)
    $scope.submit=function(){
    	$state.go('components.audit');
    }
    $scope.cancel=function(){
    	$state.go('components.audit');
    }
  }
})();
