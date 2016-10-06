/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.ruwang', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('components.ruwang', {
        url: '/ruwang',
        controller: 'ruwangCtrl',
        templateUrl: 'app/pages/components/ruwang/ruwang.html',
          title: 'ruwang',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
  }
})();
