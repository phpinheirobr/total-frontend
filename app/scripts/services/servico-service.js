angular.module('totalAutoCenterApp')
.factory('ServicoService', ['$http', function ($http) {

	

	var getDataFipe = function(placa) {	
		
		return $http.get('http://localhost:8080/veiculo/placa/'+placa)
		.then(function (response){
			return response.data;
		});
	}	

	return {
		getDataFipe
	}
}]);