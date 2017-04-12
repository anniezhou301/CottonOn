var myApp = angular.module('myApp', []);
var loginApp = angular.module('loginApp', []);

loginApp.controller('loginCtrl', ['$scope', '$http', function ($scope, $http){
console.log('checking');




}]);


myApp.controller('appCtrl', ['$scope', '$http', function ($scope, $http){

var refresh = function(){

	$http({
		method: 'GET',
		url: '/list'
	}).then(function(data){
		$scope.list = data.data;
		
		printClothes($scope.list);
	}),function (error){
		console.log(error);
	};
	
};
	refresh();
	var check = function(labelName){
	}
	$scope.addClothing = function(){
		$http({
			method: 'POST',
			url: '/list',
			data: $scope.things})
		.then(function(data){
			console.log(data);}),
		 function(error){
			console.log(error);};
			refresh();
	};
$scope.remove = function(id){
	$http({
		method: 'DELETE',
		url: '/list/' + id
		})
	.then(function(data){
		refresh();
	}),
	function(error){
		console.log(error);
	};
	


};
}]);

