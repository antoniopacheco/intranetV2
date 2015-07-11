(function(){

var API_KEY = 'ffef470c9f26f4ca9ec567f092f49990672a0500';

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
    'ngCookies',
    'ngStorage',
    'datatables',
    'ngLoadingSpinner'
  ])
  .constant('urls',{
    BASE: 'https://intranet2.intranet.com/',
    BASE_API: 'https://api.intranet.com'
  })
  .config(config)
  .run(run)

  config.$inject = ['$routeProvider','$locationProvider','$httpProvider'];
  function config($routeProvider,$locationProvider, $httpProvider){
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
        templateUrl: 'instructores/lista.html',
        controller: 'InstructoresCtrl'
      })
      .when('/instructores/:id',{
        templateUrl: 'instructores/vista.html',
        controller: 'viewInstructorCtrl'
      })
      .when('/logout',{
          controller: 'LogoutCtrl',
          template: ' '
      })
      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'login/login.view.html',
        controllerAs: 'vm'
      })
      .when('/sinprivilegios',{
        templateUrl: 'views/errores/privilegios.html'
      })
      .otherwise({
        redirectTo: '/login'
      });

      $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {
       return {
           'request': function (config) {
               config.headers = config.headers || {};
               config.headers['X-Authorization'] = API_KEY;

               if ($localStorage.token) {
                   config.headers.Authorization = 'Bearer ' + $localStorage.token;
               }
               return config;
           },
           'responseError': function (response) {
               if (response.status === 401) {
                   $location.path('/signin');
               }else if(response.status === 403){
                    $location.path('/sinprivilegios');
               }
               return $q.reject(response);
           }
       };
      }]);
    }

    function run($localStorage,AuthenticationService,$location){
      //checamos si ya tiene iniciada sesion

      if($localStorage.token && $location.path() != '/logout'){
        //actualizamos apps
          AuthenticationService.checkApps();
      }
    }
  })();