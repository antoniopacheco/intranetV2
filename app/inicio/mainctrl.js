(function () {
    'use strict';
/**
 * @ngdoc function
 * @name intranetv2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the intranetv2App
 */
angular
  .module('intranetv2App')
  .controller('MainCtrl',MainCtrl);
    
    MainCtrl.$inject= ['$scope','$rootScope','pagosSrv','AuthenticationService'];

    function MainCtrl($scope, $rootScope, pagosSrv, AuthenticationService){
    //validacion si puede ver costos?
      var currentTime = new Date()
  		var year = currentTime.getFullYear();
  		var yearbefore = year--;
      $scope.series = [year, yearbefore];
      $scope.data=[];
      loadRemoteData();

      function applyRemoteData(data){
        var actual=[];
        var anterior=[];
        var meses =[];
        data.forEach(function(entry){
          if(entry.actual == 0)
            return false;
          actual.push(entry.actual);
          anterior.push(entry.anterior);
          meses.push(entry.mes);
        });
        $scope.data.push(actual);
        $scope.data.push(anterior);
        $scope.labels = meses;
      }

      function loadRemoteData(){
        pagosSrv.getall()
        .then(
          function(data){
            applyRemoteData(data.resumen);
          }
        )
      }      
		  $scope.labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
		  
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  }

})();
