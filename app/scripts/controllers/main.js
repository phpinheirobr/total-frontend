'use strict';

/**
 * @ngdoc function
 * @name totalAutoCenterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the totalAutoCenterApp
 */
angular.module('totalAutoCenterApp')
  .controller('MainCtrl',['$scope', '$rootScope', '$timeout', '$mdSidenav', '$log', function ($scope, $rootScope, $timeout, $mdSidenav, $log) {
    
    $scope.toggleLeft = buildDelayedToggler('left');
    


     function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

     function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");

          });
      }, 200);
    }

    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
      habilitarAbaServicos();                
        });

    };
      var habilitarAbaServicos = function () {
        $rootScope.flabAbaServicos = true;
      }


  }]);
