/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.audit')
      .controller('InformCtrl', InformCtrl);

  /** @ngInject */
  function InformCtrl($scope,$state,$stateParams) {
    var id = $stateParams.obj;
   
    console.log(id)
     $scope.submit=function(){
      console.log('确认通知');
      $state.go('components.audit');
     }
     $scope.partners=[
     	{
     		id:1,
     		compony:'北京xx',
     		name:'汽车',
     		place:'北京',
     		type:'旗舰店',
     		person:'黎明',
     		phone:'13235556556'
     	}
     ]
  }
})();
