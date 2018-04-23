angular.module('totalAutoCenterApp')
  .controller('NovoServicoCtrl',['$scope', '$q', '$timeout', 'ApiFipeService', 'ServicoService', 'Notification', function (
    $scope, $q, $timeout, ApiFipeService, ServicoService, Notification) {

  	var vm = this;
    vm.init = init;
    vm.getMarcas = getMarcas;
        //messagens textos
    var stabilishConecton = '<strong>Aguarde</strong> Estabelecendo conexão com API FIPE';
    var loadFipeMsg = '<strong>Ótimo</strong> Api integração com FIPE foi estabelecida';
    var loadFipeMsgError = '<strong>Sinto Muito</strong> Não foi possível estabelecer comunicação a com API FIPE';
  	vm.marcas = [];	
  	vm.modelos = [];	
  	vm.marca;
  	vm.modelo;
  	vm.selectedStep = 0;
    vm.stepProgress = 1;
    vm.maxStep = 3;
    vm.showBusyText = false;
    vm.stepData = [
        { step: 1, completed: false, optional: false, data: {} },
        { step: 2, completed: false, optional: false, data: {} },
        { step: 3, completed: false, optional: false, data: {} },
    ];

    

    vm.getSelectedText	= getSelectedText;
    

    
    var getSelectedText = function() {
        if ($scope.marca !== undefined) {
          
        } else {
          return "Please select an item";
        }
      };	

    vm.enableNextStep = function nextStep() {
        //do not exceed into max step
        if (vm.selectedStep >= vm.maxStep) {
            return;
        }
        //do not increment vm.stepProgress when submitting from previously completed step
        if (vm.selectedStep === vm.stepProgress - 1) {
            vm.stepProgress = vm.stepProgress + 1;
        }
        vm.selectedStep = vm.selectedStep + 1;
    }

    vm.moveToPreviousStep = function moveToPreviousStep() {
        if (vm.selectedStep > 0) {
            vm.selectedStep = vm.selectedStep - 1;
        }
    }

    vm.submitCurrentStep = function submitCurrentStep(stepData, isSkip) {
        var deferred = $q.defer();
        vm.showBusyText = true;
        console.log('On before submit');
        if (!stepData.completed && !isSkip) {
            //simulate $http
            $timeout(function () {
                vm.showBusyText = false;
                console.log('On submit success');
                deferred.resolve({ status: 200, statusText: 'success', data: {} });
                //move to next step when success
                stepData.completed = true;
                vm.enableNextStep();
            }, 1000)
        } else {
            vm.showBusyText = false;
            vm.enableNextStep();
        }
    }

    	vm.getModelos = function() {
    		ApiFipeService.getModelos(vm.marca.codigo).then(function(response){
    						vm.modelos = response;
    		});	
    };	

        vm.getModelo = function(idMorca, idModelo) {
            ApiFipeService.getModelo(idModelo).then(function(response){
                        vm.modelo = response;                    
            });
        } 

    	vm.getAnos = function() {
    		ApiFipeService.getAnos(vm.marca.codigo, vm.modelo.codigo).then(function(response){
    						vm.anos = response;
    		});	
    };	

          function getMarcas() {
            Notification.info(stabilishConecton);
                ApiFipeService.getMarcas().then(function(response){
                            vm.marcas = response;
                            vm.modelo = {};
                            Notification.success(loadFipeMsg);
          }).catch(function(error) {
            Notification.error(loadFipeMsgError);
    });
        }

          vm.changePlaca = function (placa){
            if(placa.length == 7){
             ServicoService.getDataFipe(placa).then(function (response){
                    vm.carregarComboVeiculo(response);
             })};
          } 

           vm.carregarComboVeiculo = function (fipeData){
            angular.forEach(vm.marcas, function(marca){
                        if(marca.codigo ==  fipeData.id){
                            vm.marca = marca;
                        }
            });

            vm.getModelos()
          }     

    	 function init(){
            vm.getMarcas();
        };  	
          
         
        

  }]);
