'use strict';

/**
 * @ngdoc overview
 * @name intranetv2App
 * @description
 * # intranetv2App
 *
 * Main module of the application.
 */
angular
  .module('intranetv2App', [
    'ngResource',
    'ngRoute',
    'datatables'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/instructores',{
        templateUrl: 'views/instructores/lista.html',
        controller: 'InstructorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
