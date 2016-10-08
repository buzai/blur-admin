/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.audit')
      .controller('AuditCtrl', AuditCtrl);

  /** @ngInject */
  function AuditCtrl($scope,$state) {

    $scope.applicants=[
    	{
    		id:1,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:2,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:1,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:3,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:1,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:4,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:5,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	}

    ]

    $scope.applicants2=[
    	{
    		id:1,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:2,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:1,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:3,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:1,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:4,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:5,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	}

    ]

    $scope.applicants3=[
    	{
    		id:5,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    		operate:'通知'
    	},
    	{
    		id:1,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    		operate:'查看'
    	}
    	]

    $scope.stateGo = function (operate) {
    	console.log(operate);

    	if (operate === '通知') {

    		console.log('tongzhi')

    		$state.go('components.inform');
    	} else {
    		console.log('chakan')

    		$state.go('components.viewDetails');
    	}
    }

  }
})();
