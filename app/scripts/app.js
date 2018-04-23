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
    'ui-notification',
    'ngAnimate',
    'ui.mask',
    'md-steppers',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'lfNgMdFileInput'
  ])
  .config(function ($routeProvider, $httpProvider, $locationProvider, NotificationProvider) {


$httpProvider.defaults.useXDomain = true;
$httpProvider.defaults.withCredentials = false;
$httpProvider.defaults.headers.common["X-Requested-With"];
$httpProvider.defaults.headers.common["Accept"] = "application/json";
$httpProvider.defaults.headers.common["Content-Type"] = "application/json"

    NotificationProvider.setOptions({
            delay: 3000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'right',
            positionY: 'top'
        });

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
