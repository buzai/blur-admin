/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.audit')
      .controller('LogoutModalCtrl', LogoutModalCtrl);

  /** @ngInject */
  function LogoutModalCtrl($scope,$state) {
    $scope.logout=function(){
    	$state.go('components.viewDetails');
    }
  }
})();
