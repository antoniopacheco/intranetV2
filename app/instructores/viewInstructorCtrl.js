'use strict';
/**
 * @ngdoc function
 * @name intranetv2App.instructores:viewInstructorCtrl
 * @description
 * # viewInstructorCtrl
 * Controller of the intranetv2App
 */
 angular.module('intranetv2App')
 .controller('viewInstructorCtrl',['$scope','$routeParams','instructorSrv', function($scope,$routeParams,instructorSrv){
 	$scope.instructor={};
 	var id_instructor = $routeParams.id;
 	$scope.instructor = instructorSrv.show(id_instructor);
 }
 ]);
