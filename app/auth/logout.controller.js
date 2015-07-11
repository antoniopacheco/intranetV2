'use strict';
angular.module('intranetv2App')
	.controller('LogoutCtrl',['$location','$rootScope', '$localStorage', function($location,$rootScope,$localStorage){
		delete $localStorage.token;
		delete $rootScope.menu;
        delete $rootScope.user;
         window.location = "#/login";
	}]);