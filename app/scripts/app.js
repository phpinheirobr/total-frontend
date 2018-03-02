'use strict';

/**
 * @ngdoc overview
 * @name totalAutoCenterApp
 * @description
 * # totalAutoCenterApp
 *
 * Main module of the application.
 */
angular
  .module('totalAutoCenterApp', [ 
    'ngMaterial',
    'ngMessages',
    'ngAnimate',
    'md-steppers',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
       .when('/servicos', {
        templateUrl: '/views/servicos.html',
        controller: 'ServicoCtrl',
        controllerAs: 'servico'
      })
       .when('/novoServico', {
        templateUrl: '/views/novo-servico.html',
        controller: 'NovoServicoCtrl',
        controllerAs: 'novoServico'
      })
      .otherwise({
        redirectTo: '/'
      });
       $locationProvider.html5Mode({enabled: true, requireBase: false});
  });
