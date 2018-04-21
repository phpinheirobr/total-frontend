var app = angular.module('totalAutoCenterApp');

app.directive('ngMax', function() {
  return function(scope, element, attrs) {
    angular.element(element).on("keypress keydown", function(e) 
    { 
      if (e.keyCode != 8 && this.value.length == attrs.ngMax) 
      {  
         e.preventDefault();
         return false;
      }
    });
  };
});

app.controller("ctrl", ["$scope",
  function($scope) {

  }
]);