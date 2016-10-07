/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.info')
      .controller('InfoCtrl', InfoCtrl);

  /** @ngInject */
  function InfoCtrl($scope){
    console.log('info');
    $scope.someinfo = 'info';
    $scope.agent={};
    $scope.btn="btn1";
    // 基本信息
    $scope.basicInformation=function(BasicForm){
    	$scope.submitbasic = true;
    	var basic = {
    		companyName: $scope.agent.companyName,
    		carBrand: $scope.agent.carBrand,
    		nature: $scope.agent.nature,
    		establishDate: $scope.agent.establishDate,
    		registerCapital: $scope.agent.registerCapital,
    		shopNumber: $scope.agent.shopNumber,
    		sellSuffer: $scope.agent.sellSuffer,
    		afterSale: $scope.agent.afterSale

    	}
    	console.log(basic);
    }
    // 股份构成
    $scope.sharesConstitute=function(SharesForm){

    }
    // 关键人员背景
    $scope.backdrop=function(BackdropForm){

    }
    // 股份股东投资情况
    $scope.investment=function(InvestForm){

    }
    // 销售维修状况
    $scope.maintenance=function(ServiceForm){

    }
    // 财务状况
    $scope.financing=function(financeForm){

    }
    // 市场情况
    $scope.marketConditions=function(marketForm){
    		
    }
  }
})();
