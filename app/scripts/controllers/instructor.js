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
