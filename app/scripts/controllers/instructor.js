'use strict';

/**
 * @ngdoc function
 * @name intranetv2App.controller:InstructorCtrl
 * @description
 * # InstructorCtrl
 * Controller of the intranetv2App
 */
angular.module('intranetv2App')
  .controller('InstructorCtrl', ['$scope','$http','instructor', function ($scope, $http,instructor) {
  	function InstructorCtrl(DTOptionsBuilder, DTColumnDefBuilder){
  		  	var vm = this;

  	 vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);
  	}

  	$scope.instructores =[];
  	loadRemoteData();
   // instructor.getAll.then(function(obj){
   //  	$scope.instructores = obj.data;
   //  });

  function applyRemoteData(instructores){
  	$scope.instructores = instructores.instructores;
  }

  	function loadRemoteData(){
  		instructor.getAll()
  		.then(
  			function(instructores){
  				applyRemoteData(instructores);
  			}
  		)
  	}
  }]);
