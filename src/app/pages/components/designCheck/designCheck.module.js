/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.designCheck', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('components.designCheck', {
        url: '/designCheck',
        controller: 'DesignCheckCtrl',
        templateUrl: 'app/pages/components/designCheck/designCheck.html',
          title: '建店设计审核',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      })
      .state('components.storeCheck', {
        url: '/storeCheck',
        controller: 'StoreCheckCtrl',
        templateUrl: 'app/pages/components/designCheck/storeCheck.html',
          
      });
  }
})();
