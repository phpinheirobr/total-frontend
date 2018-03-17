angular.module('totalAutoCenterApp')
.factory('ApiFipeService', ['$http', function ($http) {

		
		var getMarcas = function() {	
		
		return $http.get('https://fipe.parallelum.com.br/api/v1/carros/marcas')
		.then(function (response){
			return response.data;
		});
	}	

	var getModelos = function(marcaId) {	
		
		return $http.get('https://fipe.parallelum.com.br/api/v1/carros/marcas/'+ marcaId +'/modelos')
		.then(function (response){
			return response.data;
		});
	}				
		return {
			getMarcas,
			getModelos 
		};

}]);