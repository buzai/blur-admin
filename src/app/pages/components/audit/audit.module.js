/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.audit', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('components.audit', {
        url: '/audit',
        controller: 'AuditCtrl',
        templateUrl: 'app/pages/components/audit/audit.html',
          title: '入网审核',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      })
      .state('components.check', {
        url: '/check',
        controller: 'CheckCtrl',
        templateUrl: 'app/pages/components/audit/check.html',
        params:{
          obj:3333
        }
          
      })
      .state('components.inform', {
        url: '/inform',
        controller: 'InformCtrl',
        templateUrl: 'app/pages/components/audit/inform.html',
        params:{
          obj:3333
        }
          
      })
      .state('components.viewDetails', {
        url: '/viewDetails',
        controller: 'ViewDetailsCtrl',
        templateUrl: 'app/pages/components/audit/viewDetails.html',
          
      })
      .state('components.logoutModal', {
        url: '/logoutModal',
        controller: 'LogoutModalCtrl',
        templateUrl: 'app/pages/components/audit/logoutModal.html',
          
      });
  }
})();
