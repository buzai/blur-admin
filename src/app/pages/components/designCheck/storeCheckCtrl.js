/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.designCheck')
      .controller('StoreCheckCtrl', StoreCheckCtrl);

  /** @ngInject */
  function StoreCheckCtrl($scope,$state) {
    $scope.showflag=false;
    $scope.change=function(){
        $scope.showflag=!$scope.showflag;
    }
     $scope.partners=[
     	{
     		id:1,
     		compony:'北京xx',
     		name:'汽车',
     		place:'北京',
     		type:'旗舰店',
     		person:'黎明',
     		phone:'13235556556',
     		email:'1213444@qq.com'
     	}
     ]
     $scope.designfirms=[
     {
        compony:'北京xx',
        amount:'5',
        person:'李明',
        phone:'135655664444'
     }
        
     ]
     $scope.checkLog=[
        {
          date:'20161008',
          person:'黎明',
          x:'业务部门审核通过',
          result:'市场部 张经理审核通过'
        },
        {
          date:'20161008',
          person:'黎明',
          x:'业务部门审核通过',
          result:'市场部 张经理审核通过'
        },
        {
          date:'20161008',
          person:'黎明',
          x:'业务部门审核通过',
          result:'市场部 张经理审核通过'
        }

     ]
     
     $scope.submit=function(){
        $state.go('components.designCheck');
     }
     $scope.cancel=function(){
        $state.go('components.designCheck');
     }
  }
})();
