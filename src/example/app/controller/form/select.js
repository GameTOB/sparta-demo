'use strict';

angular.module("app")

.controller("app.form.selectCtrl", function($rootScope , $scope, $timeout , $http) {
	

	$scope.userDate = {
		addressInfo : {"address_components":[{"long_name":"6","short_name":"6","types":["street_number"]},{"long_name":"酒仙桥路","short_name":"酒仙桥路","types":["route"]},{"long_name":"朝阳","short_name":"朝阳","types":["sublocality_level_1","sublocality","political"]},{"long_name":"北京","short_name":"北京","types":["locality","political"]},{"long_name":"北京市","short_name":"北京市","types":["administrative_area_level_1","political"]},{"long_name":"中国","short_name":"CN","types":["country","political"]},{"long_name":"100015","short_name":"100015","types":["postal_code"]}],"formatted_address":"中国北京市朝阳区酒仙桥路6号 邮政编码: 100015","geometry":{"location":{"lat":39.98259600000001,"lng":116.489765},"location_type":"ROOFTOP","viewport":{"northeast":{"lat":39.98394498029151,"lng":116.4911139802915},"southwest":{"lat":39.98124701970851,"lng":116.4884160197085}}},"partial_match":true,"place_id":"ChIJ3cM4UbWr8TUR_VjRLF6gLQE","types":["street_address"]},
		inputWord : ""
	};
	$scope.query = "酒仙桥6号"

	$scope.addresses = [{
		formatted_address:"请您输入地址的关键字"
	}];
	$scope.refreshAddresses = function(address){
		if(!address || address.length<2){
			//举例子输入1个字也不请求
			return;
		}
		//样例未封为服务，服务可以做内存Cache策略
		var params = {address:address,sensor: false};
		$scope.addresses = [{
			formatted_address:"查询中..."
		}];
		return $http.get(
	      'http://maps.googleapis.com/maps/api/geocode/json',
	      {params: params}
	    ).then(function(response) {
           console.log(response);
           //只截取10个做样例
	       $scope.addresses = response.data.results.length>0 ? 
	       		response.data.results.splice(0,10) :
	       		[{
					formatted_address:"抱歉，没有查到任何结果"
				}];
	    });
	};
	
})
