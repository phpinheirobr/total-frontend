angular.module('totalAutoCenterApp')
.factory('ApiFipeService', ['$http', function ($http) {

		
		var getMarcas = function() {	
		
		return $http.get('http://fipeapi.appspot.com/api/1/carros/marcas.json')
		.then(function (response){
			return response.data;
		});
	}		
		return {
			getMarcas
		};

}]);