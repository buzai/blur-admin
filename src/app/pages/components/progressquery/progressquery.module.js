/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.progressquery', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('components.progressquery', {
        url: '/progressquery',
        controller: 'ProgressQueryCtrl',
        templateUrl: 'app/pages/components/progressquery/progressquery.html',
          title: '进度查询',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
  }
})();
