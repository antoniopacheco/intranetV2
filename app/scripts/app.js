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
    'ngRoute'
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
      .otherwise({
        redirectTo: '/'
      });
  });
