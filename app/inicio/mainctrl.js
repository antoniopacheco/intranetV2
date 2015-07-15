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
    
    MainCtrl.$inject= ['$scope','$rootScope','pagosSrv','poaSrv','AuthenticationService'];

    function MainCtrl($scope, $rootScope, pagosSrv, poaSrv, AuthenticationService){
    //validacion si puede ver costos?
      var currentTime = new Date()
  		var year = currentTime.getFullYear();
  		var yearbefore = year--;
      $scope.series = [year, yearbefore];
      $scope.data=[];
      loadPagos();
      loadPoa();

      function applyPagos(data){
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

      function applyPoa(data){
        console.log(data);
        var year = Object.keys(data.poa)[0];
        $scope.current_cursos = data.poa[year]['total']['cursos']['ofertado'];
        $scope.poa_cursos = data.poa[year]['total']['cursos']['programado'];
        $scope.porcenta_cursos = data.poa[year]['total']['cursos']['porcentaje'];

        $scope.current_participantes = data.poa[year]['total']['usuarios']['ofertado'];
        $scope.poa_participantes = data.poa[year]['total']['usuarios']['programado'];
        $scope.porcenta_participantes = data.poa[year]['total']['usuarios']['porcentaje']; 

        $scope.current_ingresos = data.poa[year]['total']['ingresos']['ofertado'];
        $scope.poa_ingresos = data.poa[year]['total']['ingresos']['programado'];
        $scope.porcenta_ingresos = data.poa[year]['total']['ingresos']['porcentaje'];                       
      }

      function loadPagos(){
        pagosSrv.getall()
        .then(
          function(data){
            applyPagos(data.resumen);
          }
        )
      } 

      function loadPoa(){
        poaSrv.getResume()
        .then(
          function(data){
            applyPoa(data);
          }
        )
      }            
		  
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  }

})();
