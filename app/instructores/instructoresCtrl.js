'use strict';
/**
 * @ngdoc function
 * @name intranetv2App.controller:InstructoresCtrl
 * @description
 * # InstructoresCtrl
 * Controller of the intranetv2App
 */
angular.module('intranetv2App')
  .controller('InstructoresCtrl', ['$scope','$http','instructorSrv', function ($scope, $http,instructorSrv) {
  	function InstructoresCtrl(DTOptionsBuilder, DTColumnDefBuilder){
      var vm = this;
      vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);
  	}
  	$scope.instructores =[];
  	loadRemoteData();

    function applyRemoteData(instructores){
    	$scope.instructores = instructores.instructores;
    }

  	function loadRemoteData(){
  		instructorSrv.getAll()
  		.then(
  			function(instructores){
  				applyRemoteData(instructores);
  			}
  		)
  	}

    // function viewSingle(){
    //   alert("hola mundo!");
    // }
    
  }]);

  //single Instructor
